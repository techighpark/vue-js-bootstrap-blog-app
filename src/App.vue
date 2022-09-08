<template>
  <NavBar />
  <router-view :blogs="blogs"></router-view>
  <router-view name="a"></router-view>
</template>

<script>
import blogs from '@/assets/blogs/blogs';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: { NavBar },
  data() {
    return {
      blogs,
    };
  },
};
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
