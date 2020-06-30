// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false
// import Demo from './Demo.vue'
// Vue.component('Demo2', {})

new Vue({
  data: {
    user: {
      email: '1059511459@qq.com',
      nickName: 'McCall',
      phone: '+8613812545462'
    }
  },
  template: `
      <div>
          {{displayName}}
          <div>
              另一处也要使用名字 {{displayName}}
          </div>
      </div>
  `,
  computed: {
    displayName() {
      const user = this.user
      return user.nickName || user.email || user.phone
    }
  }
}).$mount('#app')
