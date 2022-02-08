import Client from './Clients/AxiosClient';
const resource = '/item';

export default {
	get() {
		return Client.get(`${resource}`);
	},
	getItem(id) {
		return Client.get(`${resource}/${id}`);
	}

}