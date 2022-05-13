
<template>
  <div class="Press">
    <span>{{Press}}</span>
  </div>
</template>
<script>
import { debuglog } from "util";
export default {
  data() {
    return {};
  },
  props: {
    Press: {
      type: String,
      default() {
        return "主要操作";
      }
    }
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.Press {
  background: #0b71ba;
  border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  width: 343px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0.58px;
    text-align: center;
    opacity: 0.3;
  }
}
</style>