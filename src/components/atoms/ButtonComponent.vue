<template>
    <button :class="['btn', buttonType]" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonType: {
        type: String,
        default: 'primary',
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #B230FD; /* Bright Purple */
    color: #FFFFFF; /* White */
  }
  .btn.secondary {
    background-color: #2D0741; /* Deep Purple */
    color: #FFFFFF; /* White */
  }
  </style>
  