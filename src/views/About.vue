<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
        a:1
    }
  },
  mounted() {
    console.log("env",process.env);
    console.log("NODE.ENV",process.env.NODE_ENV);
    console.log("BASE_URL: ", process.env.BASE_URL);
    console.log("VUE_APP_PUBLIC_PATH",process.env.VUE_APP_PUBLIC_PATH);
    console.log("VUE_APP_API: ", process.env.VUE_APP_API);
  }
}
</script>
<style lang="scss" scoped>
.about{
  background:$color-red
}
</style>