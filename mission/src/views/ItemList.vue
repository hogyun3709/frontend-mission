<template>
  <div class="container mb-5 pb-5" data-test="item-list-page">
    <!-- <Item
      v-for="item in items"
      :description="item.description"
      :img="item.image"
      :title="item.name"
      :original_price="item.original_price"
      :price="item.price"
      :id="item.product_no"
      :key="item.product_no"
      class="item mx-3 my-2"
    /> -->
    <Item v-for="item in items" :key="item.id" :product="item" />
  </div>
  {{ items }}
</template>

<script>
import Item from '@/components/ItemList/Item.vue';
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');

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
    async getItem() {
      const { data } = await ItemRepository.get();
      this.items = data;
      console.log(this.items);
    },
  },
  created() {
    this.getItem();
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
