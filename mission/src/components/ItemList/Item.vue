<template>
  <img data-test="item-img" :src="img" />
  <div class="has-text-weight-bold">
    <span
      v-if="isDiscounted"
      :class="{ 'has-text-danger': isDiscounted }"
      data-test="discount-rate"
    >
      {{ displayDiscountRate }}
    </span>
    <span data-test="final-price">{{ priceWithComma }}</span>
  </div>
  <h4 data-test="item-title">{{ name }}</h4>
  <div data-test="item-discription" class="is-size-7">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    img: { type: String, default: '' },
    price: { type: Number, default: 0 },
    original_price: { type: Number, default: 0 },
  },
  computed: {
    priceWithComma() {
      return `${this.price.toLocaleString()}원`;
    },
    isDiscounted() {
      return this.original_price !== 0;
    },
    displayDiscountRate() {
      const dividend = this.original_price - this.price;
      const divisor = this.original_price;
      const rate = (dividend / divisor) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style>
</style>
