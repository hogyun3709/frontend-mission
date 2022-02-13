import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemListBottomNav from '@/components/ItemList/BottomNav.vue';

import CartPage from '@/views/Cart.vue';
import OrderPage from '@/views/Order.vue';

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
	{
		path: '/cart',
		name: 'Cart',
		components: {
			header: ItemListHeader,
			main: CartPage,
			nav: ItemListBottomNav,
		}
	},
	{
		path: '/order',
		name: 'Order',
		components: {
			main: OrderPage,
		}
	}
];
