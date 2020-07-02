<template>
    <div id="app">
        App.vue中引入五个组件
        <Child1 v-if="child1Visible"/>
        <button @click="child1Visible = false">x</button>
        <br>
        <Child2 v-if="child2Visible"/>
        <button @click="child2Visible = false">x</button>
        <br>
        <Child3 v-if="child3Visible"/>
        <button @click="child3Visible = false">x</button>
        <br>
        <Child4 v-if="child4Visible"/>
        <button @click="child4Visible = false">x</button>
        <br>
        <Child5 v-if="child5Visible"/>
        <button @click="child5Visible = false">x</button>
        <br>
    </div>
</template>
<script>
  import Child1 from './components/Child1.vue'
  import Child2 from './components/Child2.vue'
  import Child3 from './components/Child3.vue'
  import Child4 from './components/Child4.vue'
  import Child5 from './components/Child5.vue'

  export default {
    data() {
      return {
        child1Visible: true,
        child2Visible: true,
        child3Visible: true,
        child4Visible: true,
        child5Visible: true,
      }
    },
    components: {Child1, Child2, Child3, Child4, Child5}
  }
</script>

<style>
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>