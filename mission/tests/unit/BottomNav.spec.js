import { mount } from '@vue/test-utils';
import BottomNav from '@/components/ItemList/BottomNav.vue';

describe('BottomNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BottomNav);
  });

  it('test bottom-navigation element exists', () => {
    expect(wrapper.find('div[data-test="bottom-navigation"]').exists()).toBe(true);
  });

  it('tests N of page navigation buttons are rendered', () => {
    const numberOfTestButtons = 4;

    expect(wrapper.findAll('button').length).toBe(numberOfTestButtons);
  });

  it('합의된 4가지 페이지(버튼)에 텍스트가 표시 되는지를 테스트 합니다.', () => {
    const firstCompromisedNavText = '홈';
    const secondCompromisedNavText = '찜 목록';
    const thirdCompromisedNavText = '장바구니';
    const fourthCompromisedNavText = '마이 페이지';

    expect(wrapper.get('button[data-test="home"]').text()).toBe(firstCompromisedNavText);
    expect(wrapper.get('button[data-test="market-liked"]').text()).toBe(secondCompromisedNavText);
    expect(wrapper.get('button[data-test="cart"]').text()).toBe(thirdCompromisedNavText);
    expect(wrapper.get('button[data-test="my-page"]').text()).toBe(fourthCompromisedNavText);
  });
});
