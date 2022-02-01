<template>
  <Header />
  <router-view />
  <BottomNav />
</template>

<script>
import Header from '@/views/Header.vue';
import BottomNav from '@/views/BottomNav.vue';

export default {
  name: 'App',
  components: {
    Header,
    BottomNav,
  },
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
