<script>
import {nanoid} from 'nanoid';
import pubsub from 'pubsub-js'

export default {
  name: "MyHeader",
  props: ['receive'],
  methods: {
    add(element) {
      const item = {id: nanoid(), title: element.target.value, done: false};
      this.receive(item);
    },
    sendbybus(element) {
      const item = {id: nanoid(), title: element.target.value, done: false};
      this.receive(item);
    }
  },
  mounted() {
    this.$bus.$on('sendData', (data) => {
      console.log('从list发来的数据', data)
    })
    //订阅消息
    pubsub.subscribe('hello', function (methodName, param1) {
      console.log('订阅消息生效', methodName, param1)
    })
  }
}
</script>

<template>
  <input type="text" placeholder="请输入内容 并按下回车添加" @keyup.enter="add">
</template>

<style scoped>
</style>