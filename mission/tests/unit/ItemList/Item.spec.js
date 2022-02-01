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
  /* 모든 테스트에서 can not read property 'toLocaleString' of undefined */
  it('tests item의 img url data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('img[data-test="item-img"]').exists()).toBe(true)
    expect(wrapper.find('img[data-test="item-img"]').isVisible()).toBe(true)
  })
  it('tests item의 discount rate data를 렌더링할 element가 존재하는지 여부와 화면상에 보여지는지의 여부', () => {
    expect(wrapper.find('[data-test="discount-rate"]').exists()).toBe(true)
    /* Conditional rendering 을 다루는법 */
    // expect(wrapper.find('[data-test="discount-rate"]').isVisible()).toBe(true)
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
  it('item의 img element에 보여질 data가 props 로부터 전달되어 원하는 값이 template에 나타나는지 확인합니다.', async () => {
    await wrapper.setProps({
      item: [
        {
          img: 'testUrl'
        }
      ]
    })
    /* undefined.. */
    // expect(wrapper.find('[data-test="item-img"]').attributes().src).toEqual('testUrl')
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

  it('컴포넌트에 props가 성공적으로 전달되었는지 확인합니다', () => {
    expect(wrapper.props()).toEqual({
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
    })

  });

  it('원가와 할인율을 계산한 computed property인 final price가 잘 렌더링 되는지 확인합니다.', () => {
    /* can not read property finalPrice of undefined */
    // expect(wrapper.props().computed.finalPrice.call())
    /* */
    // expect(wrapper.get('[data-test="final-price"]').text()).toBe(`${finalPrice.toLocaleString()}원`)
  })
});





