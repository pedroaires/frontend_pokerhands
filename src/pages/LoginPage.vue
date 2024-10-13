<template>
    <div class="login-page">
      <h1>Login</h1>
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from '@/components/molecules/LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    background-color: #A6A9B6; /* Light Grey */
  }
  
  h1 {
    color: #B230FD; /* Bright Purple */
  }
  
  p {
    color: #2D0741; /* Deep Purple */
    font-size: 18px;
    margin-top: 20px;
  }
  </style>
  