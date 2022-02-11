<template>
  <div id="cart">
    <h4>장바구니</h4>
    <Item
      v-for="item in cartItem"
      :name="item.name"
      :description="item.description"
      :img="item.image"
      :price="item.price"
      :original_price="item.original_price"
      :key="item.product_no"
    ></Item>
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';

export default {
  name: 'Cart',
  components: {
    Item,
  },
  computed: {
    cartItem() {
      return this.$store.state.cartItem;
    },
  },
  mounted() {
    this.$store.dispatch('getCartItem');
  },
};
</script>

<style>
</style>
