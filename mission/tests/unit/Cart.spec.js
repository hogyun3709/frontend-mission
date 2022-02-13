import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Cart from '@/views/Cart.vue';

const store = createStore({
  state() {
    return {
      cartItem: [],
    };
  },

});
