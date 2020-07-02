import Vue from 'vue'
import log from './log.js'

const MyVue = Vue.extend({
  mixins: [log]
})

export default MyVue