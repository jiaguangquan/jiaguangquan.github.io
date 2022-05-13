<template>
  <div class="list_box">
    <div class="cont" v-for="(item,index) in list" :key="index">
      <!-- 图文组合列表地 -->
      <div v-if="item.listType == '1'">
        <div class="list_item2">
          <div class="item_title2">{{item.title}}</div>
          <div class="item_desc2">更多</div>
        </div>
        <div class="list_item">
          <img class="iconimg" :src="item.icon" alt>
          <div class="content_box">
            <div class="item_title">{{item.contentTitle}}</div>
            <div class="item_desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
      <!-- 文字组合列表地 -->
      <div v-if="item.listType == '2'">
        <div class="list_item2">
          <div class="item_title2">{{item.title}}</div>
          <div class="item_desc2">更多</div>
        </div>
        <div class="list_item">
          <div class="content_box">
            <div class="itemtitle">{{item.contentTitle}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  //url("https://tfs.alipayobjects.com/images/partner/T1bNRtXlpXXXXXXXXX")
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            icon: "",
            title: "这里是大标题",
            contentTitle: "这里是内容标题",
            desc: "这里是内容说明文字",
            listType: "1"
          }
        ];
      }
    }
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.item_desc2 {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0.48px;
  text-align: left;
  flex: 1;
  text-align: right;
}
.item_title2 {
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0.61px;
  text-align: left;
  flex: 1;
}
.content_box {
  display: flex;
  flex-direction: column;
  flex: 10;
}
.right {
  width: 16px;
  height: 20px;
  margin-left: 10px;
}
.list_item2 {
  width: 100%;
  min-height: 52px;
  background-color: #fff;
  display: flex;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  //   justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.list_item {
  width: 100%;
  min-height: 98px;
  background-color: #fff;
  display: flex;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  //   justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  .item_img {
    flex: 1;
    text-align: center;
  }
  .iconimg {
    width: 30px;
    height: 30px;
    margin-bottom: 30px;
    flex: 1;
  }
  .item_title {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 2;
    margin-left: 16px;
  }
  .item_title2 {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 2;
  }
  .item_title3 {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 2;
    margin-left: 16px;
  }
  .item_desc {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 3;
    margin-left: 16px;
  }
  .itemtitle {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 2;
  }
  .desc {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0.58px;
    text-align: left;
    flex: 3;
  }
}
</style>