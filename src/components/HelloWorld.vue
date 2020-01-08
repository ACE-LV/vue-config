<template>
  <div class="hello">API: {{ api }}122223</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      api: process.env.VUE_APP_API
    };
  },
  props: {
    msg: String
  },
  mounted() {
    console.log("env",process.env);
    console.log("NODE.ENV",process.env.NODE_ENV);
    console.log("BASE_URL: ", process.env.BASE_URL);
    console.log("VUE_APP_PUBLIC_PATH",process.env.VUE_APP_PUBLIC_PATH);
    console.log("VUE_APP_API: ", process.env.VUE_APP_API);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
