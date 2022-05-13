<template>
  <div class="wby">
    <div class="wby_title">
        {{wbyObj.title}}
    </div>
    <textarea @input="onValueChange" name="" id="" cols="30" :maxlength='wbyObj.maxlength' rows="10" :placeholder="wbyObj.desc">
    </textarea>
    <span>{{wbyObj.length}}/{{wbyObj.maxlength}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
        
    };
  },
  props: {
    wbyObj: {
      type: Object,
      default() {
        return {
            title:'这里是标题',
            desc:'这里是提示文字',
            maxlength:240,
            length:0
        }
      }
    },
  },
  components: {
      
  },
  mounted() {},
  methods: {
    onValueChange: function (e) {
        this.$emit('textareaValue',e.target.value);
    },
  }
};
</script>
<style lang="less" scoped>
.wby {
    position: relative;
    span {
        position: absolute;
        bottom: 8px;
        right: 12px;
        font-family: PingFangSC-Regular;
        font-size: 17px;
        color: #999999;
        letter-spacing: 0;
        text-align: right;
    }
}
textarea {
    width: 323px;
    height: 120px;
    border: 1px solid #EBEBEB;
    padding-top: 8px;
    padding-left: 12px;
    font-size: 17px;
}
.wby_title {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0.52px;
    margin-bottom: 9px;
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