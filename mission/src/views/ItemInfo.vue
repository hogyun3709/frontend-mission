<template>
  <div class="container">
    <img :src="item.image" />
    <div class="columns mt-1 mx-1 is-mobile">
      <div class="column is-one-fifth">
        <figure class="image is-square">
          <!-- image 를 local이 아닌 http 통신으로 받아올때 생기는 latency에 대한 loading 이 필요할수도 -->
          <img
            class="is-rounded"
            data-test="profile-picture"
            :src="item.seller.profile_image"
          />
        </figure>
      </div>
      <div class="column">
        <p class="has-text-left is-size-5-mobile" data-test="market-name">
          {{ item.seller.name }}
        </p>
        <div
          v-for="tag in item.seller.hash_tags"
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
          {{ item.name }}
        </h4>
        <div v-if="isDiscounted" class="has-text-left is-size-4-mobile">
          <span
            class="has-text-weight-bold has-text-danger"
            data-test="discount-rate"
          >
            {{ displayDiscountRate }}
          </span>
          <span class="has-text-weight-bold" data-test="discount-price">
            {{
              priceWithComma(isDiscounted() ? item.price : item.original_price)
            }}
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
        v-html="item.description"
        class="ml-4 has-text-left is-size-6-mobile has-text-weight-bold"
        data-test="product-detail-description"
      />
    </section>
    <hr />
    <div id="reviews" v-for="review in item.reviews" :key="review.review_no">
      <div class="columns mt-2 mb-6 mx-2 is-mobile">
        <div class="column is-three-fifths">
          <h4 class="has-text-left is-size-4-mobile" data-test="review-title">
            리뷰
          </h4>
          <div class="has-text-left is-size-6-mobile">
            <p>
              <span
                class="has-text-weight-bold"
                data-test="review-customer-name"
              >
                {{ review.writer }}
              </span>
              <span
                class="ml-1 is-size-7-mobile"
                data-test="review-customer-timestamp"
              >
                {{ review.created }}
              </span>
            </p>
            <span
              class="has-text-weight-bold is-size-4-mobile"
              data-test="review-content-title"
            >
              {{ review.title }}
            </span>
          </div>
          <div class="has-text-left is-size-6-mobile">
            <span data-test="review-content-description">
              {{ review.content }}
            </span>
          </div>
        </div>
        <div class="column is-two-fifth">
          <figure class="image is-square mobile">
            <img data-test="review-customer-image" :src="review.img" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="navbar is-fixed-bottom">
    <button class="button mt-1" data-test="purchase-button-discount">
      {{
        priceWithComma(isDiscounted() ? item.price : item.original_price)
      }}구매
    </button>
  </div>
</template>

<script>
import ItemApi from '@/api/Item/ItemApi';
import ItemModel from '@/model/Item/ItemInfo';

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      item: ItemModel,
    };
  },

  methods: {
    isDiscounted() {
      return this.item.original_price !== 0;
    },
    priceWithComma(value) {
      return `${value.toLocaleString()}원`;
    },
    isReviewImgExists(review) {
      return Object.prototype.hasOwnProperty.call(review, 'img');
    },
  },
  computed: {
    displayDiscountRate() {
      const originalPrice = this.item.original_price;
      const { price } = this.item;
      const dividend = originalPrice - price;
      const divisor = originalPrice;
      const rate = (dividend / divisor) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
  async created() {
    const apiClient = new ItemApi();
    const response = await apiClient.getItemInfo(this.product_no);
    const originalItem = this.item;
    this.item = Object.assign(originalItem, response.data.item);
  },
};
</script>

<style scoped>
.text-deco {
  text-decoration-line: line-through;
}
</style>
