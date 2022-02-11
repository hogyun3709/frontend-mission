import { createStore } from 'vuex';
import CartApi from '@/api/Cart/CartApi.js';

export default createStore({
  state: {
    cartItem: [],
  },
  mutations: {
    setPost(state, cartItem) {
      state.cartItem = cartItem;
    },
  },
  actions: {
    async getCartItem({ commit }) {
      const apiClient = new CartApi();
      const response = await apiClient.getCartItemList();
      commit('setPost', response.data.cart_item);
    },
  },
  modules: {
  },
});
