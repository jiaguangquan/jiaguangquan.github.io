<template>
  <div class="footer">
    <div class="typeone" v-if="Inscription.type == '1'">{{Inscription.Inscription}}</div>
    <div class="typetwo" v-if="Inscription.type == '2'">
      <div class="textone">{{Inscription.Inscriptionurl}}</div>
      <div class="texttwo">{{Inscription.Inscription}}</div>
    </div>
    <div class="typetwo" v-if="Inscription.type == '3'">
      <div class="textone">
          <span>{{Inscription.Inscriptionurl}}</span>
          <span class="line"></span>
          <span>{{Inscription.InscriptionurlTwo}}</span>
      </div>
      <div class="texttwo">{{Inscription.Inscription}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    Inscription: {
      type: Object,
      default() {
        return {
          Inscription: "这里是底部落款描述",
          Inscriptionurl: "这里是底部链接",
          InscriptionurlTwo: "这里是底部链接",
          type: "1"
        };
      }
    },
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
}
.typeone {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0.45px;
}
.typetwo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .textone {
    margin-bottom: 6px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #108ee9;
    letter-spacing: 0.45px;
    display: flex;
    align-items: center;
    .line {
        display: inline-block;
        width: 2px;
        height: 12px;
        background-color: #D8D8D8;
        margin-left: 7px;
        margin-right: 7px;
    }
  }
  .texttwo {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.45px;
  }
}
</style>