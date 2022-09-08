<template lang="">
  <div>
    <h5>{{ title }}</h5>
    <span>{{ date }}</span>
    <div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListComponent',
  props: {
    title: String,
    content: String,
    date: String,
    number: Number,
  },
};
</script>
<style lang=""></style>
