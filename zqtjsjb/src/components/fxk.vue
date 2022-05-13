<template>
  <div class="main">
    <van-checkbox-group v-model="result" icon-size="25px" @change="toggle">
      <van-checkbox v-for="(item,index) in list" :key="index" class="van_checkbox" :disabled="item.disabled" :name="item.content">{{item.content}}</van-checkbox>
    </van-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result:[]
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            content:'选项1',
            disabled:false,
            name:'选项1'
          },{
            content:'选项2',
            disabled:false,
            name:'选项1'
          },{
            content:'选项3',
            disabled:true,
            name:'选项1'
          },
      ]
      }
    },
  },
  components: {},
  mounted() {},
  methods: {
    toggle(e) {
        this.$emit('checkboxValue', e)
    }
  }
};
</script>
<style lang="less" scoped>
.van_checkbox {
  font-size: 18px;
  font-family: PingFang-SC-Medium;
  color: #333333;
  letter-spacing: 0.58px;
  margin-top: 10px;
}
.main {
  //   background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 32px 16px 32px 16px;
  min-height: 100vh;
  
  .title {
    font-size: 24px;
  }
}
.HanwebUI_desc {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #999999;
  letter-spacing: 0.52px;
  margin-bottom: 34px;
}
.HanwebUI_title {
  font-family: PingFangSC-Medium;
  font-size: 23px;
  color: #333333;
  letter-spacing: 0.74px;
  text-align: left;
}
</style>