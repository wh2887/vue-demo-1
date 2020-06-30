// import App from './App.vue'
const Vue = window.Vue
// Vue.config.productionTip = false
// import Demo from './Demo.vue'
// Vue.component('Demo2', {})

let id = 0
const createUser = (name, gender) => {
  id += 1
  return {id: id, name: name, gender: gender}
}

new Vue({
  data: {
    users: [
      createUser('方方', '男'),
      createUser('圆圆', '女'),
      createUser('灰灰', '男'),
      createUser('甜甜', '女'),
    ],
    displayUsers: []
  },
  template: `
      <div>
          <div>
              <button @click="showAll">全部</button>
              <button @click="showMale">男</button>
              <button @click="showFemale">女</button>
          </div>
          <ul>
              <li v-for="(u,index) in displayUsers" :key="index">{{u.id}}-{{u.name}}-{{u.gender}}</li>
          </ul>
      </div>
  `,
  created() {
    this.displayUsers = this.users
  },
  methods: {
    showMale() {
      this.displayUsers = this.users.filter(u => u.gender === '男')
    },
    showFemale() {
      this.displayUsers = this.users.filter(u => u.gender === '女')
    },
    showAll(){
      this.displayUsers = this.users
    }
  }
  ,
  computed: {}
}).$mount('#app')
