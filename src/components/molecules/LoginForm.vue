<template>
    <form @submit.prevent="handleLogin">
      <Input v-model="username" placeholder="Username" />
      <Input v-model="password" type="password" placeholder="Password" />
      <Button @click="handleLogin">Login</Button>
    </form>
  </template>
  
  <script>
  import Input from '@/components/atoms/InputComponent.vue';
  import Button from '@/components/atoms/ButtonComponent.vue';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    components: {
      Input,
      Button,
    },
    methods: {
      handleLogin() {
        if (this.username === 'user' && this.password === 'password') {
          // On successful login, navigate to the home page
          this.$router.push('/home');
        } else {
          console.log('Login attempt:', this.username, this.password);
          console.log("For now, use 'user' and 'password' as credentials");
          alert('Invalid login credentials');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  </style>
  