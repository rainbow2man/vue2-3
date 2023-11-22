<script>
 export default {
   name:'MyItem',
   props:['item','handleCheck1'],
   methods:{
     handleCheckTemp(id){
       this.handleCheck1(id);
     }
   }
 }
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheckTemp(item.id)"/>
      <span>
        {{item.title}}
      </span>
    </label>
  </li>
</template>

<style scoped>

</style>