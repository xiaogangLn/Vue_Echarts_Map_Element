<template>
  <div class="loginIndex">
    <!-- 头部信息 -->
    <div class="loginIndex-title">
      <!-- 服务商logo -->
      <!-- <div class="loginIndex-title-logo">
        <img src="" class="title-logo-img" alt="" width="135px" height="35px;">
      </div> -->
      <!-- <div class="loginIndex-title-style"></div>
      <div class="loginIndex-title-nane">
        项目名称
      </div> -->
    </div>
    <!-- 登陆信息 -->
    <div class="loginIndex-form">
      <p class="loginIndex-form-name">
        <span>欢迎登陆</span>
      </p>
      <el-form ref="form" :rules="rules" :model="form" class="login-form" label-width="80px">
        <el-form-item label="" prop="name">
          <el-input type="text" v-model="form.name">
            <template slot="prepend">
              <i class="fa fa-user" aria-hidden="true"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input type="password" v-model="form.password">
            <template slot="prepend" prop="password">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="forget-psd">
          <span style="color: #0C5B78;">记住密码</span>
        </el-checkbox>
        <el-form-item label="">
          <el-button type="primary" class="login-btn" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div></div>
    <!-- 底部信息栏 -->
    <div class="loginIndex-footer">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      checked: true,
      rules: {
        name: [
          { required: false, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      this.$router.push({
        path: '/demoModel'
      })
      this.$message({
        message: '登录成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="" scoped>
.loginIndex-form .el-button--primary{
  color: #FFF;
  background-color: #0C5B78;
  border-color: #0C5B78;
}
</style>
<style>
.el-checkbox__inner{
  background-color: #0C5B78 !important;
  border-color: #0C5B78 !important;
}
.el-checkbox__input.is-checked{
  /* background-color: #0C5B78 !important; */
  border-color: #0C5B78 !important;
}
.el-checkbox__inner:hover{
  border-color: #0C5B78 !important;
}
</style>

<style lang="scss" scoped>
 @import './login.scss'
</style>
