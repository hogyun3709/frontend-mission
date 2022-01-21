<template>
  <div id="item-list-page">
    <Item v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  components: {
    Item,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'https://picsum.photos/200',
          title: 'Item 1',
          isDiscount: false,
          dicountRate: 0,
          originalPrice: 200000,
        },
        {
          id: 2,
          img: 'https://picsum.photos/200',
          title: 'Item 2',
          isDiscount: false,
          dicountRate: 0,
          originalPrice: 200000,
        },
        {
          id: 3,
          img: 'https://picsum.photos/200',
          title: 'Item 3',
          isDiscount: false,
          dicountRate: 0,
          originalPrice: 200000,
        },
      ],
    };
  },
};
</script>

<style>
</style>
