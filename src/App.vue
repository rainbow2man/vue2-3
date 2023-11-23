<template>
  <div id="app">
    <MyHeader :receive="receive"></MyHeader>
    <MyList :todos="todos" :handleCheck1="handleCheck1"></MyList>
    <div class="divider">动画</div>
    <MyTranslation></MyTranslation>
    <div class="divider">动画 过渡</div>
    <MyTranslation2></MyTranslation2>
    <div class="divider">系统代理</div>
    <button @click="getStudentInfo">获取学生信息</button>
    <div class="divider">solt插槽</div>
    <div class="myslot" >
      <my-solt :listData="foods">
        <img slot="header" src="https://img.zcool.cn/community/01ee4e58d67811a801219c77fe6166.jpg@1280w_1l_2o_100sh.jpg" alt=""/>
        <ul slot="list">
          <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
      </my-solt>
      <my-solt :listData="games">
        <img slot="header" src="https://img.zcool.cn/community/01ee4e58d67811a801219c77fe6166.jpg@1280w_1l_2o_100sh.jpg" alt=""/>
        <ul slot="list">
          <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
      </my-solt>
      <my-solt :listData="films">
        <img slot="header" src="https://img.zcool.cn/community/01ee4e58d67811a801219c77fe6166.jpg@1280w_1l_2o_100sh.jpg" alt=""/>
        <ul slot="list">
          <li v-for="(item,index) in films" :key="index">{{ item }}</li>
        </ul>
      </my-solt>
    </div>
    <div class="divider">VUEX</div>
    <div>
      {{number}}
      {{bigSum}}
      <button @click="add(1)">+1</button>
    </div>
    <div class="divider">路由</div>
    <router-link to="/about" active-class="active">about</router-link>
    <router-link to="/home" active-class="active">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import MyList from "@/components/MyList.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyTranslation from "@/components/translation.vue";
import MyTranslation2 from "@/components/translation2.vue";
import axios from "axios";
import mySolt from "@/components/mySolt.vue";
import {mapActions, mapGetters, mapState} from "vuex";


export default {
  name: 'App',
  components: {
    MyList, MyHeader, MyTranslation, MyTranslation2, mySolt
  },
  mounted() {
    window.currentthis = this;
  },
  data() {
    return {
      todos: [
        {id: '001', title: 'aa', done: true},
        {id: '002', title: 'bb', done: false},
        {id: '003', title: 'nn', done: true},
      ],
      foods: ['火锅', '烧烤', '炒饭'],
      games: ['斗地主', '麻将', '象棋'],
      films: ['泰坦星际', '星际穿越', '星球大战']
    }

  },
  methods: {
    receive(item) {
      this.todos.push(item);
    },
    handleCheck1(id) {
      console.log("@@")
      this.todos.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;

          console.log("## ", !item.done)
        }
      })
    },
    // 获取学生信息
    getStudentInfo() {
      axios.get("http://localhost:8080/api/students").then(res => {
        console.log(res.data)
      })
    },
    ...mapActions('numberOptions', {add:'add'})
  },
  computed:{
    ...mapState('numberOptions',['number']),
    ...mapGetters('numberOptions',['bigSum']),
  }
}
</script>

<style scoped>
.divider {
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.myslot {
  height: 500px;
  display: flex;
  justify-content: space-between;
}

img {
  width: 100%;
}
.active {
  color: red;
}
</style>
