<template>
    <div class="child">
        Child.vue {{money}}
        <button @click="$emit('update:money', money - 100)">花钱</button>
    </div>
</template>
<script>
  export default {
    props: ['money']
  }
</script>

<style>
    .child {
        border: 5px solid darkgreen;
        margin: 50px;
        padding: 20px;
    }
</style>