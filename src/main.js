// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false

import Demo from './Demo.vue'

Vue.component('Demo2', {})
new Vue({
  components: {Demo},
  data: {
    visible: true
  },
  template: `
      <div>
<!--          调用toggle-->
          <button @click="toggle">toggle</button>
          <Demo v-if="visible === true"/>
      </div>
  `,
  methods: {
    toggle() {
      this.visible = !this.visible
      //toggle方法会将visible的数值取反。
    }
  }
}).$mount('#app')
