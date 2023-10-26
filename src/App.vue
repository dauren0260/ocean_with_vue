<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" src="./assets/scss/reset.scss"></style>
<style lang="css">
  #app{
    position: relative;
    min-height: 100vh;
  }
</style>