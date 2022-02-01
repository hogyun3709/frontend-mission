<template>
  <div data-test="header" class="is-size-4 my-3">
    <div class="navbar" :class="{ 'navbar-hidden': !showNavbar }">
      Test Shopping Mall
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    /* Scroll Down = False, currentScrollPosition > lastScrollPosition */
    /* Scroll Up = True, lastScrollPosition > currentScrollPosition */
    onScroll() {
      const scrollPositionOld = window.pageYOffset;
      const scrollPositionNew = document.documentElement.scrollTop;
      const currentScrollPosition = scrollPositionOld || scrollPositionNew;
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.5s all ease-out;
}
.navbar-hidden {
  transform: translate3d(0, -100%, 0);
}
</style>
