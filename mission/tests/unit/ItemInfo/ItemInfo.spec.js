import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });
  it('renders ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
  /* should check not only element but data - 추후구현 */
  it('renders seller product image element on DOM', async () => {
    expect(wrapper.get('img[data-test="product-image"]').exists()).toBe(true);
  });
  /* image style height 과 width 의 비율을 1:1 로 확인 할수있는 테스트 코드 구현 필요 */
  it('checks image has ratio of sqaure', () => {
    expect(wrapper.find('img[data-test="product-image"]').attributes().style).toBe();
  });
});
