<template>
  <div class="login">
    <img class="bgimg" src="../../assets/img/login.png" alt="">
    <button class="btn" @click="phoneLogin">手机号登录</button>
  </div>
</template>

<script>
// import api from '@/service/api.js'
import login from '@//service/apihome.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData () {
      // console.log('login', login.login)

      login.login({
        phone: '18837176591',
        password: 'wang1996'
      }).then(res => {
        console.log('res', res)
      })
    },
    phoneLogin () {
      this.$router.puth('/logining')
    }
  },
  created () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.login{
   width: 100%;
    height: 100%;
    // position: relative;
  .bgimg{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .btn{
    border: 1px solid #dc383f;
    position: absolute;
    background: rgba(0,0,0,0);
    color: #dc383f;
    width: 80%;
    left: 10%;
    height: 40px;
    border-radius: 30px;
    top: 45%;
    font-weight: bold;
  }
}
</style>
