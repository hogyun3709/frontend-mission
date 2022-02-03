<template>
  <div class="has-text-left">
    <img data-test="item-img" :src="product[0].image" />
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
    <h4 data-test="item-title">{{ product[0].name }}</h4>
    <div data-test="item-discription" class="is-size-7">
      {{ product[0].description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {
          product_no: '',
          name: '',
          description: '',
          price: 0,
          original_price: 0,
          image:
            'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
        };
      },
    },
  },
  computed: {
    priceWithComma() {
      const { price } = this.product[0];
      return `${price.toLocaleString()}원`;
    },
    isDiscounted() {
      const originalPrice = this.product[0].original_price;
      return originalPrice !== 0;
    },
    displayDiscountRate() {
      const originalPrice = this.product[0].original_price;
      const { price } = this.product[0];

      const dividend = originalPrice - price;
      const divisor = originalPrice;
      const rate = (dividend / divisor) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style>
</style>
