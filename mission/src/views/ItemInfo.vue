<template>
  <div class="container">
    <figure class="image is-square mobile">
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
    <div class="columns mt-2 mx-2 is-mobile">
      <div class="column is-three-fifths">
        <h4 class="has-text-left is-size-3-mobile" data-test="product-name">
          {{ sellerData.productName }}
        </h4>
        <div
          v-if="sellerData.isDiscount == true"
          class="has-text-left is-size-4-mobile"
        >
          <span
            class="has-text-weight-bold has-text-danger"
            data-test="discount-rate"
          >
            {{ sellerData.discountRate }}%
          </span>
          <span class="has-text-weight-bold" data-test="discount-price">
            {{ discountPrice }}원
          </span>
          <span class="text-deco is-size-5-mobile" data-test="original-price">
            {{ noDiscountPrice }}원
          </span>
        </div>
        <div v-else class="has-text-left has-text-weight-bold is-size-4-mobile">
          <span data-test="original-price"> {{ noDiscountPrice }}원 </span>
        </div>
      </div>
      <div class="is-one-fifth">
        <button
          class="mt-5 mb-5 button is-primary"
          @click="setDiscount"
          data-test="apply-discount"
        >
          {{ this.sellerData.discountRate }}% 할인 적용
        </button>
      </div>
    </div>
    <section class="hero">
      <h4
        class="ml-4 has-text-left is-size-4-mobile"
        data-test="product-description-title"
      >
        상품정보
      </h4>
      <p
        class="ml-4 has-text-left is-size-6-mobile has-text-weight-bold"
        data-test="product-detail-description"
      >
        {{ this.sellerData.productDetail.description }}
      </p>
      <figure class="image is-square ml-4 mr-4 mobile">
        <img
          data-test="product-detail-image"
          :src="this.sellerData.productDetail.image"
        />
      </figure>
    </section>
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
        productName: '핏이 좋은 수트',
        productPrice: 200000,
        isDiscount: true,
        discountRate: 10,
        productDetail: {
          description: '체형에 관계없이 누구에게나 맞는 수트!',
          image: 'https://picsum.photos/200/300',
        },
      },
    };
  },
  methods: {
    setDiscount() {
      this.sellerData.isDiscount = !this.sellerData.isDiscount;
    },
  },
  computed: {
    discountPrice() {
      // eslint-disable-next-line operator-linebreak
      const finalPrice =
        // eslint-disable-next-line operator-linebreak
        this.sellerData.productPrice -
        this.sellerData.productPrice / this.sellerData.discountRate;
      return finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    noDiscountPrice() {
      return this.sellerData.productPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style scoped>
.text-deco {
  text-decoration-line: line-through;
}
</style>
