import axios from 'axios';

class BaseClient {
	/* 추후 static 한 내용 대신 dynamic하게? .env의 활용 고려 */
	constructor() {
		const baseURL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
		const apiKey = 'abcd1234';

		this.instance = axios.create({
			baseURL,
			headers: {
				authorization: apiKey,
			},
		});
	}
}

export default BaseClient;