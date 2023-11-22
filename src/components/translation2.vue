<!--vue的动画-->
<script>
import 'animate.css'
export default {
  name: "MyTranslation2",
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
    <transition-group name="animate__animated animate__bounce"
                      appear
                      enter-active-class="animate__headShake"
                      leave-active-class="animate__fadeOut"
    >
      <h1 v-show="isShow" :key="1">翻译</h1>
      <h1 v-show="isShow" :key="2">翻译1</h1>
    </transition-group>
  </div>
</template>

<style scoped>
h1 {
  background-color: aqua;
  transition: 0.5s linear;
}

.hello-enter,.hello-leave-to{
  transform: translateX(-100%);
}

.hello-enter-to ,.hello-leave{
  transform: translateX(0);
}
</style>