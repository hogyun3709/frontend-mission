# frontend-mission

- Vue.js 를 활용하여 매주 기능 구현 요구사항을 포함한 미션을 바탕으로 수행 했습니다.
- TDD 방법론을 바탕으로 진행했습니다.
- 수행기간은 2022-01-05 ~ 2022-02-15 입니다.

# Week 1

---

 🚧 기능 구현 요구사항

[frontend-mission/docs/week1 at main · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/tree/main/docs/week1)

1. 제공된 Boilerplate 코드를 개발 서버의 첫 페이지에서 로고와 “Welcome to Your Vue.js App”이라는 문구 밑에 문자열 입력란(이하 input)과 버튼이 있습니다.
2. input은 첫 로딩 시 빈 문자열을 가지고 있으며, input에서 입력한 값은 실시간으로 반영되어 바로 밑에 표시가 되어야 합니다.
3. 버튼을 누르면 input에 입력된 문자열과 바로 밑에 표시되는 문자열이 왼쪽으로 1칸씩 회전합니다.
(ex. Projectlion라는 입력값이 있을 때, 버튼을 1회 클릭하면 rojectlionP으로 변경됩니다.)
4. `**심화**` 또 다른 버튼을 만들어, 이 버튼을 누르면 input에 입력된 문자열과 이 버튼을 누른 횟수를 보여주는 알림창을 띄워보세요.

❗Pull Request

[Week1 Feature(UserInput): to handle user input text message by a simp... by hogyun3709 · Pull Request #1 · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/pull/1)

💬 Code Presentation

[1주차 미션](https://www.youtube.com/watch?v=5Iy1oJdolU4&t=4s)

# Week 2

---

### 🚧 기능 구현 요구사항

[frontend-mission/docs/week2 at main · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/tree/main/docs/week2)

1. 상품 상세정보 페이지 최상단에는 상품의 이미지가 정사각형 비율로 표시가 되어야 합니다.
2. 상품의 이미지 하단에는 해당 상품의 판매자 정보가 표시되어야 합니다.
    - 판매자 정보는 판매자의 원형 프로필 사진, 판매자 이름(상호명), 그리고 판매자와 관련된 태그가 필요합니다.
3. 상품 판매자 정보 밑에는 상품의 기본 정보인 상품의 이름과 가격이 표시되어야 합니다.
    - 만약 해당 상품이 현재 할인 중이라면 상품의 할인율과 할인된 가격을 보여줘야 하며, 할인되고 있다는 점을 강조하기 위해 원래 가격은 삭제선을 이용해 표시되어야 합니다.
4. 상품 기존 정보 밑에는 상품 설명이 표시되어야 합니다. 상품 설명은 데이터베이스에 HTML 형태로 저장이 되어야 한다고 합의가 되었습니다.
5. 상품의 설명 밑에는 상품에 대한 리뷰들이 표시되어야 합니다.
    - 리뷰에는 리뷰를 남긴 구매자의 닉네임, 리뷰 본문이 표시되어야 합니다. 구매자는 리뷰 본문과 함께 사진도 한 장을 올릴 수 있어 리뷰 오른쪽에 1:1 비율로 업로드된 사진이 표시되어야 합니다.
6. 상품 상세 정보 페이지가 표시될 때 화면 최하단에는 장바구니 "구매" 버튼이 표시하는 영역이 존재합니다.
    - "구매" 버튼은 해당 상품의 가격이 함께 표시되어야 합니다 (예. "198,000원 구매")
    - 해당 영역은 페이지 스크롤이 되어도 최하단에 고정되어 표시되어야 합니다.

<aside>
💡 쇼핑몰 구축을 이제 막 시작한 상황을 가정한 것이기 때문에 현재 정한 요구사항들이 완벽하지 않을 수 있습니다. **따라서 프론트 엔지니어로서 추가할만한 요구사항이 있으면 더 구현해도 좋습니다.** *(단, 미션 레코드에서 본인이 추가 구현한 부분을 설명해주세요!)*

</aside>

<aside>
🚨 **추가로 고려할 요구사항들**

1. 단일 컴포넌트로 페이지 구성
2. 모바일 환경의 웹 페이지 기준 (브라우저의 개발자 도구를 이용해 모바일 화면을 확인하며 개발)
</aside>

❗Pull Request

[Week 2 미션 제출 (김호균) by hogyun3709 · Pull Request #3 · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/pull/3)

💬 Code Presentation

[2주차 미션](https://www.youtube.com/watch?v=C3YbUPeoMTI)

🥪 느낀점

- Unit test 뿐만 아니라 E2E test도 공부 해야겠다고 느꼈습니다.
- TC 작성시 시나리오를 수립하여 작성하면 더욱 견고한 TC작성이 가능할 것이라 생각했습니다.
- FE 개발자도 Figam와 같이 프로토타이핑 툴을 익히면 좋을것 같다고 생각했습니다.

# Week 3

---

### 🚧 기능 구현 요구사항

[frontend-mission/docs/week3 at main · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/tree/main/docs/week3)

1. 상품 목록 페이지 최상단에는 쇼핑몰의 이름이 표시되는 영역(이하 Header)이 존재합니다.
2. 상품 목록 페이지 최하단에는 4가지 페이지로 이동할 수 있는 버튼을 담은 영역(이하 Nav)이 존재합니다.
    - 4가지 페이지는 "홈"(상품 목록들), "찜 목록", "장바구니", "마이 페이지"가 있어야 합니다.
    - 이번 미션에서는 링크를 걸거나, 다른 페이지를 구현할 필요는 없습니다.
3. 상품 목록 페이지에 표시되는 상품들은 Header 영역과 Nav 영역 사이에 2열로 표시되어야 하며, 스크롤이 가능해야 합니다.
4. 상품 목록 페이지에 표시되는 상품 정보에는 상품의 메인 사진, 상품명, 상품 가격이 표시가 되어야 합니다.
    - 상품 상세 정보 페이지에서 구현했듯이, 해당 상품이 현재 할인 중이라면 상품의 할인율과 할인된 가격을 보여줘야 합니다.
    - 이번 주차 미션에서는 각 상품의 링크는 걸 필요가 없습니다.
5. 상품 목록 페이지를 스크롤 시 Header와 Nav 영역은 스크롤을 따라가지 않으며, 아래와 같이 동작해야 합니다.
    - Nav 영역은 스크롤과 상관없이 화면의 최하단에 고정되어 표시되어야 합니다.
    - Header 영역은 하단으로 스크롤 시 숨겨지다가 페이지의 최상단으로 이동하면 다시 표시가 되어야 합니다.

❗Pull Request

[3주차 미션 제출 (김호균) by hogyun3709 · Pull Request #4 · hogyun3709/frontend-mission](https://github.com/hogyun3709/frontend-mission/pull/4)

💬 Code Presentation

[3주차 미션](https://www.youtube.com/watch?v=gvPObKIsIUA&t=3s)

🥪 느낀점

- TC 작성중, props가 undefined라는 에러에 고생했는데, props validation을 해주지 않아서 발생한 에러였다. Vue.js 공식 문서에 props validation(유효성 검사)에 대한 설명이 있는데 이를 바탕으로 props를 선언해주었다면 해결 가능한 문제 였습니다. 공식문서를 꼼꼼히 읽지 못 한것에 대하여 크게 반성했습니다.
