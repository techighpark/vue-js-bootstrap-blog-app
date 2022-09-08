<template lang="">
  <router-link to="/list">back to list</router-link>
  <div>
    <h4>{{ blogs[params]?.title }}</h4>
    <div>{{ blogs[params]?.content }}</div>
    <div>{{ blogs[params]?.date }}</div>
  </div>

  <!-- <router-link :to="{{this.$route.fullPath}}+/author">author</router-link> -->
  <span @click="$router.push({ name: `comment` })">Comment</span>
  <span @click="$router.push({ name: `author` })">Author</span>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'DetailComponent',
  data() {
    return {};
  },
  props: {
    blogs: Array,
  },
  mounted() {
    console.log(this.$route);
  },
  beforeMount() {
    if (this.$route.params.id > this.blogs.length) {
      this.$router.replace({ path: '/list' });
    }
  },
  computed: {
    params() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang=""></style>
