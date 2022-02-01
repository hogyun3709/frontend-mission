<template>
  <div class="has-text-left">
    <img data-test="item-img" :src="img" />
    <div class="has-text-weight-bold">
      <span
        v-show="isDiscount"
        :class="{ 'has-text-danger': isDiscount }"
        data-test="discount-rate"
      >
        {{ discountRate }}
      </span>
      <span data-test="final-price">{{ finalPrice }}</span>
    </div>
    <h4 data-test="item-title">{{ title }}</h4>
    <div data-test="item-discription" class="is-size-7">
      {{ discription }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    id: {
      type: Number,
      default: 1,
      required: true,
    },
    img: {
      type: String,
      default: 'https://picsum.photos/200',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    isDiscount: {
      type: Boolean,
      default: false,
      required: true,
    },
    discountRate: {
      type: Number,
      default: null,
      required: true,
    },
    originalPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    discription: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    finalPrice() {
      const price = this.originalPrice;
      const rate = this.discountRate;
      const discount = this.isDiscount;
      const discountedPrice = price - price * (rate / 100);
      return discount
        ? `${discountedPrice.toLocaleString()}원`
        : `${price.toLocaleString()}원`;
    },
    discountRate() {
      return `${this.discountRate}%`;
    },
  },
};
</script>

<style>
</style>
