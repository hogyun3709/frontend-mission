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
          isDiscount: true,
          discount_rate: 10,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
        {
          id: 2,
          img: 'https://picsum.photos/200',
          title: 'Item 2',
          isDiscount: false,
          discount_rate: 0,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
        {
          id: 3,
          img: 'https://picsum.photos/200',
          title: 'Item 3',
          isDiscount: false,
          discount_rate: 0,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
        {
          id: 4,
          img: 'https://picsum.photos/200',
          title: 'Item 4',
          isDiscount: false,
          discount_rate: 0,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
        {
          id: 5,
          img: 'https://picsum.photos/200',
          title: 'Item 4',
          isDiscount: false,
          discount_rate: 0,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
        {
          id: 6,
          img: 'https://picsum.photos/200',
          title: 'Item 4',
          isDiscount: false,
          discount_rate: 0,
          original_price: 200000,
          discription: '제품에 대한 설명입니다',
        },
      ],
    };
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
