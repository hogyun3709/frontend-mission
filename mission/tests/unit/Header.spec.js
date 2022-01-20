import { mount } from '@vue/test-utils';
import Header from '@/views/Header.vue';

describe('Header', () => {
	it('renders Header', () => {
		const wrapper = mount(Header);
		expect(wrapper.find('div[data-test="header"]').exists()).toBe(true);
	});

	it('displays name of the mall', () => {
		const testShoppingMallName = 'Test Shopping Mall';

		const wrapper = mount(Header, {
			data() {
				return {
					shoppingMallName: testShoppingMallName,
				};
			},
		});
		expect(wrapper.get('div[data-test="header"]').text()).toBe(testShoppingMallName);
	});
});
