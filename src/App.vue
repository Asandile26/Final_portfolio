<template>
  <nav-bar/>
  <router-view/>

  <FooterComp/>
</template>
<script>

import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';
// import SinglePageView from './views/singlePageView.vue';

export default{
  components: { NavBar, FooterComp}
 
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
template {
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
  }

  html{
    scroll-behavior: smooth;
    scroll-padding: 3em;
  }
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #0c0c0c;
  overflow-x: hidden;
  max-width: 100%;
  width: 100%;
}
h1{
  padding: 10px;
}




</style>
