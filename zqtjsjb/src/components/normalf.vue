
<template>
    <div class="normal">{{normal}}</div>
</template>
<script>
import { debuglog } from 'util';
export default {
  data() {
    return {
      
    };
  },
  props: {
    normal:{
        type:String,
        default(){
            return '主要操作'
        }
    }
  },
  components: {
      
  },
  mounted() {},
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.normal {
  background: #fff;
  border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #DDDDDD;
  color: #333;
  width: 343px;
  height: 47px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  letter-spacing: 0.58px;
  text-align: center;
  line-height: 47px;
}

</style>