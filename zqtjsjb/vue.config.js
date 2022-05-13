const webpack = require("webpack");
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数
            propList: ["*"],
            selectorBlackList:['van']
          })
        ]
      }
    },
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  publicPath: "./",
  runtimeCompiler: true,
  devServer: {
    port: 8071,
    open: true, //配置自动启动浏览器
    proxy: {
      "/proxyServer": {
        target: "https://ytcms.yantai.gov.cn/", //代理服务server
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/proxyServer": ""
        }
      },
      "/proxyServer1": {
        target: "http://61.185.238.225:25556/", //代理服务server1
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/proxyServer1": ""
        }
      },
      "/proxyServer2": {
        target: "https://zqt.yantai.gov.cn/", //代理服务server2
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/proxyServer2": ""
        }
      }
    }
  }
};
