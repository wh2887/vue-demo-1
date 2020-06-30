<template>
    <div class="red">
        {{this.obj.n}}
        <button @click="add">+1</button>
        Demo
        <hr>
        {{message}}
        找出数组中的偶数：{{fn}}
        <hr>
        测试Vue中data的BUG <br>
        一开始就定义的d的值，显示区域：{{obj.d}} <br>
        一开始未定义的b的值，显示区域：{{b}}
        <button @click="setB">set b</button>
    </div>
</template>

<script>
  const Vue = window.Vue
  export default {
    props: ['message', 'fn'],
    data() {
      return {
        obj: {
          n: 0,
          d: 150,
        }
      }
    },
    created() {
      console.log('created 出现在内存中,前面加debugger验证，' +
        '页面内容还没出现，这行内容就已经在控制台了')
    },
    mounted() {
      console.log('mounted 出现在页面中')
    },
    updated() {
      console.log('页面更新了，数字变了')
    },
    destroyed() {
      //点击toggle按钮的时候，触发toggle方法，组件消亡
      console.log('组件已经消亡了')
    },
    methods: {
      add() {
        this.obj.n += 1
      },
      setB() {
        console.log('hi')
        return Vue.set(this.obj, 'b', 511)
      }
    }
  }
</script>
<style scoped>
    .red {
        color: darkred;
    }
</style>