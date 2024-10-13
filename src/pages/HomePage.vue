<template>
    <div class="home-page">
      <Header />
      <p>Welcome to your dashboard! Start exploring the app features.</p>
    </div>
  </template>
  
  <script>
  import Header from '@/components/organisms/HeaderComponent.vue';
  
  export default {
    components: {
      Header,
    },
  };
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    background-color: #FFFFFF; /* White */
  }
  
  p {
    color: #2D0741; /* Deep Purple */
    font-size: 18px;
    margin-top: 20px;
  }
  </style>
  