<script >

export default {
  name: 'myNews2',
  data() {
    return {
      list: [
        {id: '001', title: 'aa', done: true},
        {id: '002', title: 'bb', done: false},
        {id: '003', title: 'nn', done: true},
      ]
    }
  }
}
</script>

<template>
  <div class="news">
    <ul>
      <li v-for="item in list" :key="item.id">
<router-link to="/home/news2/detail?id=111&title=222">{{item.title}}</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.news {
  background-color: greenyellow;
  width: 200px;
  height:100%;
}
</style>