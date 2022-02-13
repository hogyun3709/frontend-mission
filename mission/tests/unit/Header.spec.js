import { mount } from '@vue/test-utils';
import Header from '@/views/Header.vue';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header);
  });
  it('renders Header elemnt', () => {
    expect(wrapper.find('div[data-test="header"]').exists()).toBe(true);
  });
  it('checks shopping mall title text display', () => {
    const testShoppingMallName = 'Test Shopping Mall';

    expect(wrapper.get('div[data-test="header"]').text()).toBe(testShoppingMallName);
  });
});
