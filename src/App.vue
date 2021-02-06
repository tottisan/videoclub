<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "./css/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

html {
  box-sizing: border-box;

  body {
    min-height: 100vh;
    background: #f9f9f9;
    font-family: "Source Sans Pro", sans-serif;
  }
}
</style>
