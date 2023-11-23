<script>
export default {
  name: "myHome",
  mounted() {
  },
  beforeDestroy() {
  }
}
</script>

<template>
<div class="home">
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/news2">新闻2</router-link>
  <router-view></router-view>
</div>
</template>

<style scoped>
  .home {
    background-color: red;
    width: 200px;
    height: 30px;
  }
</style>