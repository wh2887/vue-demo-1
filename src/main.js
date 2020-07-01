// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false
// import Demo from './Demo.vue'
// Vue.component('Demo2', {})

new Vue({
  template: `
      <div>
          <button @click=" n += 1"> n+1</button>
          <button @click=" obj.a += 'hi'"> obj.a+hi</button>
          <button @click="obj = {a:'a',b:'b'}">obj = 新对象</button>
      </div>
  `,
  data: {
    n: 0,
    obj: {
      a: 'a',
      b: 'b'
    }
  },
  watch: {
    n() {
      console.log('n变了')
    },
    obj: {
      handler() {
        console.log('obj变了')
      },
      deep: true
    }

  },
  methods: {}
}).$mount('#app')
