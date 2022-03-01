<template>
  <div class="container mb-5 pb-5" data-test="item-list-page">
    <router-link
      v-for="item in items"
      :to="itemNoPath(item.product_no)"
      :key="item.product_no"
    >
      <Item
        :name="item.name"
        :description="item.description"
        :img="item.image"
        :price="item.price"
        :original_price="item.original_price"
        :key="item.product_no"
      ></Item>
    </router-link>
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';
import ItemApi from '@/api/Item/ItemApi';

export default {
  name: 'ItemListPage',
  components: {
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    itemNoPath(productNo) {
      return `/item/${productNo}`;
    },
  },
  async created() {
    const apiClient = new ItemApi();
    const response = await apiClient.getItemList();
    this.items = response.data.items;
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 100%;
}
.container > div {
  flex: 40%;
}
</style>
