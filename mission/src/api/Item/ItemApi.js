import BaseHttpClient from '@/api/BaseHttpClient';

export default class ItemApi {
  constructor(clientInstance) {
    /* || new BaseClient().instance의 이유? = Base http client library가 변경되었을시 고려? */
    this.clientInstance = clientInstance || new BaseHttpClient().instance;
  }

  async getItemList() {
    const result = await this.clientInstance.get('/item');
    /* return 전에 데이터 처리가 가능 */
    return result;
  }

  async getItemInfo(itemNo) {
    const result = await this.clientInstance.get(`/item/${itemNo}`);

    return result;
  }
}

/**

해당 파일은 middleware의 성격을 가집니다.
petstore.js 를 참고하면 api의 response의 데이터와 component의 key 값이 상이한 경우
각 요청을 지닌 함수안에서 일괄적으로 추가, 변경 및 수정등의 행위가 가능해집니다.

*/
