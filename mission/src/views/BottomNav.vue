<template>
  <div data-test="bottom-navigation">
    <nav class="navbar is-fixed-bottom is-justify-content-space-evenly">
      <button
        class="button is-white is-size-7 is-flex-direction-column"
        data-test="home"
      >
        <i class="fas fa-home"></i>
        <span>홈</span>
      </button>
      <button
        class="button is-white is-size-7 is-flex-direction-column"
        data-test="market-liked"
      >
        <i class="fas fa-heart"></i>
        <span>찜 목록</span>
      </button>
      <button
        class="button is-white is-size-7 is-flex-direction-column"
        data-test="cart"
      >
        <i class="fas fa-shopping-cart"></i>
        <span>장바구니</span>
      </button>
      <button
        class="button is-white is-size-7 is-flex-direction-column"
        data-test="my-page"
      >
        <i class="fas fa-user"></i>
        <span>마이 페이지</span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
