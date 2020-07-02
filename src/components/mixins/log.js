const log = {
  data() {
    return {
      name: undefined,
      time: undefined
    }
  },
  created() {
    if(!this.name){
      throw new Error('need name!')
    }
    this.time = new Date()
    console.log(`${this.name} 出生了`)
  },
  beforeDestroy() {
    let now = new Date()
    console.log(`${this.name} 消亡了， 共生存了${now - this.time} ms`)
  }
}

export default log