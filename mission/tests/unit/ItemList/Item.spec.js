import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('test Item.vue에 props의 선언만 있는 상태에서 값을 렌더링할 엘리먼트의 존재 여부를 테스트 합니다', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ItemInfoPage, {
      props: {
        item: []
      }
    });
  })
  it('tests item의 img url data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('img[data-test="item-img"]').exists()).toBe(true)
    expect(wrapper.find('img[data-test="item-img"]').isVisible()).toBe(true)
  })
  it('tests item의 discount rate data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('[data-test="discount-rate"]').exists()).toBe(true)
  })
  it('tests item의 final price data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('[data-test="final-price"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="final-price"]').isVisible()).toBe(true)
  })
  it('tests item의 title data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('[data-test="item-title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="item-title"]').isVisible()).toBe(true)
  })
  it('tests item의 discription data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('[data-test="item-discription"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="item-discription"]').isVisible()).toBe(true);

  })

});

describe('Item.vue에 props로 전달한 (test)data를 정의하고 각 항목을 테스트 합니다', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(ItemInfoPage, {
      props: {
        item: [
          {
            id: 1,
            img: 'testUrl',
            title: 'test Item title',
            isDiscount: false,
            discountRate: 0,
            originalPrice: 200000,
            discription: 'test discription'
          }

        ]
      }
    });
  })



});





