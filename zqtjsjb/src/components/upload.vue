<template>
  <van-uploader v-model="fileList" multiple :after-read="afterRead" />
</template>
<script>
export default {
  data() {
    return {
      fileList: [

      ],
    };
  },
  components: {
      
  },
  mounted() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.$emit('upload', file.content);
    },
  }
};
</script>
<style lang="less" scoped>

</style>