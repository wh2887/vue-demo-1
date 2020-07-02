const Vue = window.Vue
Vue.config.productionTip = false

new Vue({
  directives: {
    on2: {
      inserted(el, info) {
        el.addEventListener(info.arg, info.value)
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value)
      }
    }
  },
  template: `
      <div>
          {{n}} <br>
          <button v-on2:click="hi">点我：局部指令</button>
      </div>
  `,
  data() {
    return {
      n: 0
    }
  },
  methods: {
    hi() {
      console.log('hi')
    }
  }
}).$mount('#app')

