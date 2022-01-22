<template>
  <div class="has-text-left">
    <img :src="item.img" />
    <div class="has-text-weight-bold">
      <span
        v-show="item.isDiscount"
        :class="{ 'has-text-danger': item.isDiscount }"
      >
        {{ discountRate }}
      </span>
      {{ finalPrice }}
    </div>
    <h4>{{ item.title }}</h4>
    <div class="is-size-7">{{ item.discription }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    item: Object,
  },
  computed: {
    finalPrice() {
      const price = this.item.originalPrice;
      const rate = this.item.discountRate;
      const discount = this.item.isDiscount;
      const discountedPrice = price - price * (rate / 100);
      return discount
        ? `${discountedPrice.toLocaleString()}원`
        : `${price.toLocaleString()}원`;
    },
    discountRate() {
      return `${this.item.discountRate}%`;
    },
  },
};
</script>

<style>
</style>
