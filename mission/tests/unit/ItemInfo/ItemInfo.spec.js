import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemInfoPage);
  });

  /* should check not only element but data - 추후구현 */
  it('renders seller product image element on DOM', async () => {
    expect(wrapper.get('img[data-test="product-image"]').exists()).toBe(true);
  });
  /* image style height 과 width 의 비율을 1:1 로 확인 할수있는 테스트 코드 구현 필요 */
  it('checks image has ratio of sqaure', () => {
    expect(wrapper.find('img[data-test="product-image"]').attributes().style).toBe();
  });
  it('renders following elements which will display seller details', () => {
    expect(wrapper.find('img[data-test="profile-picture"]').exists()).toBe(true);
    expect(wrapper.find('p[data-test="market-name"]').exists()).toBe(true);
    expect(wrapper.find('p[data-test="seller-tag"]').exists()).toBe(true);
  });
  /* image 가 화면상에 잘 display되는지에 대한 test case 작성 필요 */
  it('displays seller infos from data', () => {
    const testSellerName = '대한양복';
    const testSellerTag = '#남성#수트';
    // const testSellerProfilePic = 'https://picsum.photos/200/300';
    expect(wrapper.get('p[data-test="market-name"]').text()).toEqual(testSellerName);
    expect(wrapper.get('p[data-test="seller-tag"]').text()).toEqual(testSellerTag);
    // expect(wrapper.get('img[data-test="profile-picture"]').text()).toEqual(testSellerProfilePic);
  });
});
