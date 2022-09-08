<template lang="">
  <div>
    <h5 @click="$router.push(`/detail/${blog.number}`)">
      <!-- <router-link :to="{ name: 'detail', params: { id: blog.number } }">{{
        blog.title
      }}</router-link> -->
      {{ blog.title }}
    </h5>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    blog: Object,
  },
};
</script>
<style lang=""></style>
