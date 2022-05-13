<template>
    <div class="group">
        <div v-for="(item, index) in inputObj.list" :key="index">
        <div class="group_list" >
            <div class="group_list_left">
                <span>{{item.title}}</span>
            </div>
            <div class="group_list_right">
                <input @input="onValueChange" :disabled="item.disabled" :id="index" :class="!Tips ? 'redcolor' : ''"  :type="item.inputType" :placeholder="item.placeholder">
            </div>
        </div>
        <div class="wring" v-if="item.Tips2 == false">{{item.title}}不正确</div>
    </div>
    </div>
</template>
<script>
import { tools } from "../tools/tool";
export default {
  data() {
    return {
        inputvalue:""
    };
  },
  props: {
    inputObj: {
      type: Object,
      default() {
        return {
            list:[
                {
                    title:'名称',
                    placeholder:'请输入名称',
                    inputType:"text",
                    Tips:'t',
                    Tips2:'t',
                }
            ]
        }
      }
    },
    Tips:{
        type:String,
        default(){
            return 't'
        }
    }
  },
  mounted() {},
  methods: {
    onValueChange: function (e) {
        this.$emit('inputValue', {
            value:e.target.value,
            id:e.target.id
        })
    },
  }
};
</script>
<style lang="less" scoped>
.redcolor {
    color: #FF0000;
}
.wring {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FF0000;
    letter-spacing: 0.45px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: right;
}
.group_list_right {
    height: 100%;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0.58px;
    text-align: right;
    input {
        height: 100%;
        text-align: right;
    }
}
.group_list_left {
    span {
        font-family: PingFangSC-Regular;
        font-size: 17px;
        color: #333333;
        letter-spacing: 0.58px;
        text-align: left;
    }
}
.group_list {
    height: 52px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.group_list:nth-of-type(1) {
    border-top: 1px solid #eee;
}
.group_title {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0.52px;
    border-bottom: 1px solid #eee;
    padding-bottom: 11px;
}
.group {
}
</style>