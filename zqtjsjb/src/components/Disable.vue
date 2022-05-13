
<template>
  <div class="Disable">
    <span>{{Disable}}</span>
  </div>
</template>
<script>
import { debuglog } from "util";
export default {
  data() {
    return {};
  },
  props: {
    Disable: {
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
.Disable {
  background: rgba(16, 142, 232, 0.6);
  border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  width: 343px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0.58px;
    text-align: center;
  }
}
</style>