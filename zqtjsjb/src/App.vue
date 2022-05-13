<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <keep-alive :include="keepAlive" >
      <router-view/>
    </keep-alive> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    keepAlive() {
      return this.$store.getters.keepAlive;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #333;
}
</style>
