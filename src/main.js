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
  data: {
    users: [
      createUser('方方', '男'),
      createUser('圆圆', '女'),
      createUser('灰灰', '男'),
      createUser('甜甜', '女'),
    ],
    gender: ''
  },
  computed: {
    displayUsers() {
      console.log('我在计算')
      const {users, gender} = this
      const hash = {
        male: '男',
        female: '女'
      }
      if (gender === '') {
        return users
      } else if (gender === 'male' || gender === 'female') {
        return users.filter(u => u.gender === hash[gender])
      } else {
        throw new Error('gender的值是意外的值')
      }
    }
  },

  methods: {
    showMale() {
      this.gender = 'male'
    },
    showFemale() {
      this.gender = 'female'
    },
    showAll() {
      this.gender = ''
    }
  }
}).$mount('#app')
