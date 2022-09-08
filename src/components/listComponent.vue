<template lang="">
  <div>
    <List v-for="blog in blogs" :key="blog.number" :blog="blog" />
  </div>
</template>
<script>
import List from './List.vue';
export default {
  name: 'ListComponent',
  components: { List },
  props: {
    blogs: Array,
  },
};
</script>
<style lang=""></style>
