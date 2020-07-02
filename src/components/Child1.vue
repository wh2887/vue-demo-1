<template>
    <div>
        {{name}}
    </div>
</template>

<script>
  import MyVue from './mixins/MyVue.js'

  export default {
    extends: MyVue,
    data() {
      return {
        name: 'Child1'
      }
    }
  }
</script>