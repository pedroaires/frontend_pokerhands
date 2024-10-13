<template>
  <div id="app">
    <img alt="PokerHands logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2D0741; /* Deep Purple from the new palette */
  margin-top: 60px;
  background-color: #A6A9B6; /* Light Grey background from the palette */
}

img {
  max-width: 200px;
  margin-bottom: 20px;
}

h1 {
  color: #B230FD; /* Bright Purple from the palette */
}
</style>