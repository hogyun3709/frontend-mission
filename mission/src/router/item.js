import ItemInfoPage from '@/views/ItemInfo.vue';

export default [
  {
    path: '/item/:id',
    name: 'ItemInfo',
    components: {
      main: ItemInfoPage,
    },
  },
];
