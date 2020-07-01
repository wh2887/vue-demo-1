<template>
    <div class="app">
        App.vue 我现在有 {{total}}
        <Child :money="total" @update:money="val=> total = val"/>
    </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components: {Child},
    data() {
      return {total: 10000}
    }
  }
</script>

<style>
    .app {
        border: 8px solid darkred;
    }
</style>