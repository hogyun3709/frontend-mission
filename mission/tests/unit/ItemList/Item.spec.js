import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;
  beforeEach(() => {
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

  /* props로 받은 data 를 child component에서 렌더링되는지 확인이 가능한 TC 작성법? */
  /* props data 가 html에서 확인이 안되는데 child 에서는 확인하는것이 아닌가? */

  // it('제품명이 렌더링 되는지 확인합니다.', async () => {
  //   const testProps = wrapper.props()
  //   await wrapper.setProps({
  //     testProps
  //   })

  //   expect(wrapper.html()).toContain(testProps)
  // })
});
