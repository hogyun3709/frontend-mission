<template>
  <router-view name="header"></router-view>
  <router-view name="main"></router-view>
  <router-view name="nav"></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
