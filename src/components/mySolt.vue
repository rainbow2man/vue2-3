<template>
  <div class="mysolt">
      <slot name="header"></slot>
      <slot name="list"></slot>
  </div>
</template>

<script>
export default {
  name: "mySolt",
  props: ['listData']
}

</script>

<style scoped>
.mysolt {
  width: 200px;
  height: 300px;
}
</style>