<template>
    <input :type="type" :placeholder="placeholder" v-model="inputValue" />
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        inputValue: '',
      };
    },
  };
  </script>
  
  <style scoped>
  input {
    padding: 10px;
    border: 1px solid #A6A9B6; /* Light Grey */
    border-radius: 4px;
    background-color: #FFFFFF; /* White */
  }
  </style>  