import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  test('checks rotateText method works properly as it designed', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find('input[type="text"]').setValue('projectlion');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('p').text()).toBe('rojectlionp');
  });
  test('checks rotateText method handles IME Issue', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find('input[type="text"]').setValue('안녕하세요');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('p').text()).toBe('녕하세요안');
  });
  /* UserInput.vue 에 대한 unit 테스트 - emitted..? */
  /* Role of UserInput.vue = as a child component passes data to parent */
});
