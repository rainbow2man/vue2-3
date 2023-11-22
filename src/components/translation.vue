<!--vue的动画-->
<script>
export default {
  name: "MyTranslation",
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<template>
  <div>
    <button @click="show">点击此处触发</button>
    <transition name="hello" appear >
      <h1 v-show="isShow">翻译</h1>
    </transition>
  </div>
</template>

<style scoped>
h1 {
  background-color: aqua;
}

.hello-enter-active {
  animation: xixihaha 1s;
}

.hello-leave-active {
  animation: xixihaha 1s reverse;
}

@keyframes xixihaha {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }

}
</style>