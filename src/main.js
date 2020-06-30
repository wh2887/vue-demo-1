// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false
// import Demo from './Demo.vue'
// Vue.component('Demo2', {})

new Vue({
  template: `
      <div>
          {{n}}
          <hr>
          <button @click="add1">+1</button>
          <button @click="add2">+2</button>
          <button @click="minus1">-1</button>
          <button @click="minus2">-2</button>
          <hr>
          <button @click="undo">撤销</button>
          <hr>
          {{history}}
      </div>
  `,
  data: {
    n: 0,
    history: [],
    inUndoModel: false
  },
  watch: {
    n(newValue, oldValue) {
      if (!this.inUndoModel) {
        this.history.push({from: oldValue, to: newValue})
      } else {
        this.inUndoModel = false
      }
    }
  },

  methods: {
    add1() {
      return this.n += 1
    },
    add2() {
      return this.n += 2
    },
    minus1() {
      return this.n -= 1
    },
    minus2() {
      return this.n -= 2
    },
    undo() {
      const last = this.history.pop()
      console.log(last)
      const old = last.from
      console.log(old)
      this.inUndoModel = true
      this.n = old
      this.$nextTick(() => {this.inUndoModel = false}, 0)
    }
  }
}).$mount('#app')
