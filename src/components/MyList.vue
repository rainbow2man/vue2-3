<script>
import MyItem from "@/components/MyItem.vue";
import pubsub from 'pubsub-js'
export default {
  name: 'MyList',
  props: ['todos', 'handleCheck1'],
  data() {
    return {}
  },
  components: {MyItem},
  methods: {
    sendData() {
      // this.$bus.$emit('sendData', 'aaa')
      pubsub.publish('hello','122','233')
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <my-item v-for="todo in todos" :key="todo.id" :item="todo" :handleCheck1="handleCheck1"></my-item>

    </ul>
    <button @click="sendData">点此向header发送数据(总线通信)</button>
  </div>
</template>

<style scoped>

</style>