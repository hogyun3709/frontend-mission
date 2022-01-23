import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';

import Item from '@/components/ItemList/Item.vue';

describe('ItemListPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemListPage)
  })

  it('renders ItemListPage', () => {
    expect(wrapper.find('div[data-test="item-list-page"]').exists()).toBe(true);
  });

  it('props로 건내줄 item data가 없으면, Item 컴포넌트를 렌더링 하지 않음을 테스트 합니다.', async () => {
    const items = []
    await wrapper.setData({
      items,
    });
    expect(wrapper.findComponent(Item).exists()).toBe(false)
  })

  it('props(data)가 1개 이상 있다면, 컴포넌트도 1개 이상 렌더링함을 테스트 합니다.', async () => {
    const items = [{ id: 1 }, { id: 2 }]
    await wrapper.setData({
      items,
    })
    const components = wrapper.findAllComponents(Item);

    expect(components.length).toBeGreaterThanOrEqual(1)
  })

  it('렌더링 된 item 컴포넌트가 없다면(0개), 실패함을 테스트 합니다.', async () => {
    const items = [{ id: 1 }]
    await wrapper.setData({
      items,
    })
    expect(wrapper.getComponent(Item)).toThrowError
  })
});
