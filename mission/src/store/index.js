import { createStore } from 'vuex';
import CartApi from '@/api/Cart/CartApi';

export default createStore({
  state: {
    cartItem: [],
    finalItem:
    {
      product_no: 'asdf1234',
      name: '핏이 좋은 수트',
      image: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
      price: 198000,
      original_price: 298000,
      description: '아주 잘 맞는 수트',
    },
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
