<template>
  <div class="fromSubmit">
    <div class="fromSubmit-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>带有校验规则的表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="p-t-20 p-l-20 p-b-15">
      <div class="login-From">
        <div class="login-From-title">
          <span>欢迎登陆</span>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input type="text" style="width：200px" v-model="ruleForm.name" autocomplete="off">
              <template slot="prepend">
                <i class="fa fa-user" aria-hidden="true"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <el-input type="password" style="width：200px" v-model="ruleForm.checkPass" autocomplete="off">
              <template slot="prepend" prop="password">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="m-t-nv-20">
            <el-checkbox class="m-l-120" v-model="ruleForm.checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 300px;" :loading="submitBtnLoad" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        checkPass: '',
        checked: false
      },
      submitBtnLoad: false,
      rules: {
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.submitBtnLoad = true
      setTimeout(() => {
        this.submitBtnLoad = false
      }, 1000)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.videoPlayer-title .el-breadcrumb{
  font-size: 16px;
  -webkit-font-smoothing: subpixel-antialiased;
}
</style>

<style>
.el-form-item__error{
  margin-left: 200px !important;
}
</style>

<style lang="scss" scoped>
@import './fromSubmit.scss'
</style>
