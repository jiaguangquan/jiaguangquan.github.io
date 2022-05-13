import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //这里放全局参数
  state: {
    token: "",
    islogin: true,
    keepAlive: [],
    count: 0
  },
  //这里是get方法
  getters: {
    keepAlive: state => state.keepAlive,
    addCount: state => {
      return state.count++;
    }
  },
  //这里是set方法
  mutations: {
    loginSuccess(state, payload) {
      state.islogin = payload;
    },
    SET_KEEP_ALIVE: (state, keepAlive) => {
      state.keepAlive = keepAlive;
    }
  },
  actions: {},
  modules: {}
});
// A,B,C,D为页面名称
// 跳转之后的页面需要缓存时加
// name: 'A',  //注意每个单页面注册name
// this.$store.commit('SET_KEEP_ALIVE', ['B', 'C', 'D']) //为空时清除缓存

// 进入页面前判断 是否添加缓存
// beforeRouteEnter (to, from, next) {
//   next(vm => {
//      if (from.path.indexOf('C') > -1) {
//           vm.$store.commit('SET_KEEP_ALIVE', ['B'])
//      }
//   })
// },
// 离开页面前判断
// beforeRouteLeave (to, from, next) {
//   if (to.path.indexOf('C') > -1) {
//      this.$store.commit('SET_KEEP_ALIVE', ['B', 'C'])
//   } else if (to.path.indexOf('A') > -1) {
// 清除缓存时将数组清空
// 　　　　　　　　this.$store.commit('SET_KEEP_ALIVE', [])
//   }
//   next()
// }
