<template>
  <div class="container mb-5 pb-5" data-test="item-list-page">
    <router-link :to="{ path: `/item/${items.items[0].product_no}` }">
      <Item v-for="item in items" :key="item.id" :product="item" />
    </router-link>
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
  methods: {
    async getItemLists() {
      const { data } = await ItemRepository.get();
      this.items = data;
      console.log(this.items);
    },
  },
  created() {
    this.getItemLists();
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
