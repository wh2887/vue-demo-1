// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false

import Demo from './Demo.vue'

Vue.component('Demo2', {})
new Vue({
  components: {Demo},
  data: {
    visible: true,
    array: [1, 2, 5, 6, 4, 5],
  },
  template: `
      <div>
          <!--          调用toggle-->
          <button @click="toggle">toggle</button>
          <Demo v-if="visible === true" :message="array" :fn="filter()"/>
          
      </div>
  `,
  methods: {
    toggle() {
      this.visible = !this.visible
      //toggle方法会将visible的数值取反。
    },
    filter() {
      return this.array.filter(item => item % 2 === 0)
    }
  }
}).$mount('#app')
