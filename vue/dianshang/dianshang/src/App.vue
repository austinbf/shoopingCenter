<template>
<div>
<Header/>
    <router-view></router-view>
    <Footer v-show="$route.path==='/home'||$route.path==='/search'"/>
</div>




</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/index.vue";

export default {
  name: 'App',
  components: {
      Header,
      Footer,





  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
