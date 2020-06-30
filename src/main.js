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
              另一处也要使用名字 {{displayName}} <br>
              <button @click="setName">点击按钮使用setter修改昵称</button>
          </div>
      </div>
  `,
  methods:{
    setName(){
      this.displayName = '方方'
    }
  }
  ,
  computed: {
    displayName: {
      get(){
        const user = this.user
        return user.nickName || user.email || user.phone
      },
      set(value){
        this.user.nickName = value
      }
    }
  }
}).$mount('#app')
