import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListPage from '@/componets/ItemList/Item.vue';
import ItemListBottomNav from '@/components/ItemList/BottomNav.vue';

export default [
	{
		path: '/',
		name: 'Home',
		components: {
			header: ItemListHeader,
			main: ItemListPage,
			nav: ItemListBottomNav,
		},
	},
	{
		path: '/item',
		name: 'ItemList',
		components: {
			header: ItemListHeader,
			main: ItemListPage,
			nav: ItemListBottomNav,
		},
	},
];
