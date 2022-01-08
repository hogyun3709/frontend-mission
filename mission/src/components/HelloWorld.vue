<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <user-input type="text" v-model:modelValue="userInputText"></user-input>
    <p>{{ userInputText }}</p>
    <button @click="rotateText">제출</button>
    <button @click="alertMessage">알림</button>
  </div>
</template>

<script>
import UserInput from './UserInput.vue';

export default {
  name: 'HelloWorld',
  components: {
    'user-input': UserInput,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      userInputText: '',
      alertCounts: 0,
    };
  },
  methods: {
    rotateText() {
      /* 선언 순서에 대한 고민 */
      const extractedChar = this.userInputText.substring(0, 1);
      const remainedChars = this.userInputText.substring(1);

      this.userInputText = remainedChars + extractedChar;
    },
    alertMessage() {
      this.alertCounts += 1;
      // eslint의 규칙을 비활성화 해도 되는가?
      // eslint-disable-next-line
      alert(`${this.userInputText} ${this.alertCounts}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
