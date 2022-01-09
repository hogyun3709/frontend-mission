<template>
  <input type="text" v-bind:value="modelValue" v-on:input="handleUserInput" />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  methods: {
    handleUserInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
