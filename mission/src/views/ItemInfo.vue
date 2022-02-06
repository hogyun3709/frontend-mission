<template>
  <div class="container">
    <figure class="image is-square mobile">
      <img :src="apiData.item.image" />
    </figure>
    <img :src="apiData.item.image" />
    <div class="columns mt-1 mx-1 is-mobile">
      <div class="column is-one-fifth">
        <figure class="image is-square">
          <!-- image 를 local이 아닌 http 통신으로 받아올때 생기는 latency에 대한 loading 이 필요할수도 -->
          <img
            class="is-rounded"
            data-test="profile-picture"
            :src="apiData.item.seller.profile_image"
          />
        </figure>
      </div>
      <div class="column">
        <p class="has-text-left is-size-5-mobile" data-test="market-name">
          {{ apiData.item.seller.name }}
        </p>
        <div
          v-for="tag in apiData.item.seller.hash_tags"
          :key="tag"
          class="has-text-left is-size-6-mobile"
          data-test="seller-tag"
        >
          #{{ tag }}
        </div>
      </div>
    </div>
    <hr />
    <div class="columns mt-2 mx-2 is-mobile">
      <div class="column is-three-fifths">
        <h4 class="has-text-left is-size-3-mobile" data-test="product-name">
          {{ apiData.item.name }}
        </h4>
        <div v-if="isDiscounted" class="has-text-left is-size-4-mobile">
          <span
            class="has-text-weight-bold has-text-danger"
            data-test="discount-rate"
          >
            {{ displayDiscountRate }}
          </span>
          <span class="has-text-weight-bold" data-test="discount-price">
            {{ priceWithComma }}
          </span>
          <span
            class="is-size-5-mobile"
            data-test="original-price"
            :class="{ 'text-deco': isDiscounted }"
          >
            {{ originalPriceWithComma }}
          </span>
        </div>
      </div>
      <div class="column is-offset-two-fifth">
        <button></button>
      </div>
    </div>
    <section class="hero">
      <hr />
      <h4
        class="ml-4 has-text-left is-size-4-mobile"
        data-test="product-description-title"
      >
        상품정보
      </h4>
      <p
        v-html="apiData.item.description"
        class="ml-4 has-text-left is-size-6-mobile has-text-weight-bold"
        data-test="product-detail-description"
      />
    </section>
    <hr />
    <div class="columns mt-2 mb-6 mx-2 is-mobile">
      <div class="column is-three-fifths">
        <h4 class="has-text-left is-size-4-mobile" data-test="review-title">
          리뷰
        </h4>
        <div class="has-text-left is-size-6-mobile">
          <p>
            <span class="has-text-weight-bold" data-test="review-customer-name">
              {{ apiData.item.reviews[0].writer }}
            </span>
            <span
              class="ml-1 is-size-7-mobile"
              data-test="review-customer-timestamp"
            >
              {{ apiData.item.reviews[0].created }}
            </span>
          </p>
          <span
            class="has-text-weight-bold is-size-4-mobile"
            data-test="review-content-title"
          >
            {{ apiData.item.reviews[0].title }}
          </span>
        </div>
        <div class="has-text-left is-size-6-mobile">
          <span data-test="review-content-description">
            {{ apiData.item.reviews[0].content }}
          </span>
        </div>
      </div>
      <div class="column is-two-fifth">
        <figure class="image is-square mobile">
          <img
            data-test="review-customer-image"
            :src="apiData.item.reviews[0].img"
          />
        </figure>
      </div>
    </div>
  </div>
  <hr />
  <div class="navbar is-fixed-bottom">
    <button
      v-if="isDiscounted"
      class="button mt-1"
      data-test="purchase-button-discount"
    >
      {{ priceWithComma }}구매
    </button>
    <button v-else class="button mt-1" data-test="purchase-button-non-discount">
      {{ originalPriceWithComma }}구매
    </button>
  </div>
</template>

<script>
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      apiData: {},
    };
  },
  created() {
    this.getItemInfos();
  },
  methods: {
    async getItemInfos() {
      const { data } = await ItemRepository.getItem();
      this.apiData = data;
      console.log(this.apiData);
    },
  },
  computed: {
    priceWithComma() {
      const { price } = this.apiData.item;
      return `${price.toLocaleString()}원`;
    },
    originalPriceWithComma() {
      const originalPrice = this.apiData.item.original_price;
      return `${originalPrice.toLocaleString()}원`;
    },
    isDiscounted() {
      const originalPrice = this.apiData.item.original_price;
      return originalPrice !== 0;
    },
    displayDiscountRate() {
      const originalPrice = this.apiData.item.original_price;
      const { price } = this.apiData.item;
      const dividend = originalPrice - price;
      const divisor = originalPrice;
      const rate = (dividend / divisor) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style scoped>
.text-deco {
  text-decoration-line: line-through;
}
</style>
