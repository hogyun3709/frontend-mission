<template>
  <div class="container mb-5 pb-5" data-test="item-list-page">
    <Item
      v-for="item in items"
      :id="item.id"
      :img="item.img"
      :title="item.title"
      :isDiscount="item.isDiscount"
      :discount_rate="item.discount_rate"
      :original_price="item.original_price"
      :discription="item.discription"
      :key="item.id"
      class="item mx-3 my-2"
    />
  </div>
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
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const { data } = await ItemRepository.get();
      console.log(`Hello, ${data}`);

      this.items = data;
    },
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
