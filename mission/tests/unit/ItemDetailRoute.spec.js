import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import ItemInfo from '@/views/ItemInfo.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: App,
		},
		{
			path: '/item/:id',
			component: ItemInfo,
		}
	]
})



describe('Item 컴포넌트를 클릭하면 ItemInfo를 렌더링하는 라우팅이 이뤄지는지를 테스트 합니다', () => {
	it('tests render ItemInfo Component via routing', async () => {
		router.push('/item/asdf1234')
		await router.isReady()

		const wrapper = mount(App, {
			global: {
				plugins: [router]
			}
		})

		expect(wrapper.findComponent(ItemInfo).exists()).toBe(true)
	})
})

