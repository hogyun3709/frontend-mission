<template>
  <div class="container">
    <figure class="image is-square">
      <img data-test="product-image" :src="sellerData.productImg" />
    </figure>
    <div class="columns mt-1 mx-1 is-mobile">
      <div class="column is-one-fifth">
        <figure class="image is-square">
          <!-- image 파일에 대한 async loading 이 필요 -->
          <img
            class="is-rounded"
            data-test="profile-picture"
            :src="sellerData.profilePic"
          />
        </figure>
      </div>
      <div class="column">
        <p class="has-text-left is-size-3-mobile" data-test="market-name">
          {{ sellerData.marketName }}
        </p>
        <p class="has-text-left is-size-4-mobile" data-test="seller-tag">
          {{ sellerData.tags[0] }}{{ sellerData.tags[1] }}
        </p>
      </div>
      <div class="column is-one-fifth"></div>
    </div>
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
        profilePic: 'https://picsum.photos/200/300',
        marketName: '대한양복',
        tags: ['#남성', '#수트'],
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>
