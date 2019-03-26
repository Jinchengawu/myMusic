<template>
  <div class="home">
    <div class="b"></div>
  </div>
</template>

<script>
// import api from '@/service/api.js'
import home from '@//service/apihome.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData () {
      // console.log('home', home.login)

      home.login({
        phone: '18530870713',
        password: 'wang111'
      }).then(res => {
        console.log('res', res)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.home{
   width:200px;
    height: 200px;
    background: #565;
  .b{
    width:100px;
     height: 200px;
    background: #256;
  }
}
</style>
