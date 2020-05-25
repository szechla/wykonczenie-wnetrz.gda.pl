<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="main-image fixed-top"></div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data: function() {
    return {

    }
  }
}

</script>

<style>
.main-image{
    color: aliceblue;
    margin: auto;
    background: url("../public/images/main-images/main-image.jpg");
    background-size: cover;
    height: 100vh;
    opacity: 1;
    z-index: -10!important;
    width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
