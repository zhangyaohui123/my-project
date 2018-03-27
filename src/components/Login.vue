<template>
  <div>
    <!-- 表单 -->
    <h1>登录</h1>
    <ul>
      <li>
        <label for="">用户名：</label>
        <input type="text" v-model='username' id="uname">
      </li>
      <li>
        <label for="pw">密码：</label>
        <input type="text" v-model='password' id="pw">
      </li>
      <li>
        <input type="button" value="提交" @click='login'>
      </li>
    </ul>
  </div>
</template>

<script>
import {login} from '../api/api.js'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // 跳转页面
      // this.$router.push({name: 'home'})
      // 调用登录接口
      let params = {
        username: this.username,
        password: this.password
      }
      login(params).then(res => {
        if (res.meta.status === 200) {
          // 存储token
          localStorage.setItem('mytoken', res.data.token)
          this.$router.push({name: 'home'})
        } else {
          console.log('用户名或密码错误')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
