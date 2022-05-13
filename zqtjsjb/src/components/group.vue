<template>
    <div class="group">
        <div class="group_title">
            {{groupObj.title}}
        </div>
        <div class="group_list" v-for="(item, index) in groupObj.list" :key="index">
            <div class="group_list_left">
                <span>{{item.title}}</span>
            </div>
            <div class="group_list_right">
                <input @input="onValueChange" :id="index"  :type="item.inputType" :placeholder="item.placeholder">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    groupObj: {
      type: Object,
      default() {
        return {
            title:'表单组标题',
            list:[
                {
                    title:'名称',
                    placeholder:'请输入名称',
                    inputType:"text"
                },{
                    title:'名称',
                    placeholder:'请输入名称',
                    inputType:"text"
                },{
                    title:'名称',
                    placeholder:'请输入名称',
                    inputType:"text"
                },
            ]
        }
      }
    },
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