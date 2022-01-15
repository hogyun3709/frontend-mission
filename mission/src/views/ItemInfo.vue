<template>
  <div id="item-info-page">
    <figure class="image is-square">
      <img data-test="product-image" :src="sellerData.productImg" />
    </figure>
  </div>
</template>

<script>
import productImage from '@/assets/product-1.png';

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      sellerData: {
        productImg: productImage,
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>
