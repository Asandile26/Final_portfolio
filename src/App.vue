<template>
  <nav-bar/>
  <router-view/>

</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';
export default{
  components: { NavBar, FooterComp },
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Vina+Sans&display=swap');

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0c0c0c;



}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
