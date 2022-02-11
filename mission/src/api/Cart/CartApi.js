import BaseHttpClient from '@/api/BaseHttpClient';

export default class CartApi {
	constructor(clientInstance) {
		this.clientInstance = clientInstance || new BaseHttpClient().instance;
	}

	async getCartItemList() {
		const result = await this.clientInstance.get('/cart');

		return result;
	}
}
