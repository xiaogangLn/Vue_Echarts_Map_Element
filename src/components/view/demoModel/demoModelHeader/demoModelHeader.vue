<template>
  <div class="demoModelHeader">
    <div class="demoModelHeader-content">
      <div class="demoModelHeader-content-login">产品logo</div>
      <div class="demoModelHeader-content-tab">顶部中间导航内容</div>
      <div class="demoModelHeader-content-dateile">
        <el-tooltip class="item" effect="dark" content="点击全屏查看!" placement="bottom">
          <i class="el-icon-full-screen" @click="buttoncli"></i>
        </el-tooltip>
        <div class="m-r-30">
          <el-badge :value="3" class="item" style="cursor: pointer;">
            消息
          </el-badge>
        </div>
        <div class="cus-admin">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              账号:
              <span class="m-l-5">admin</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-setting">账号管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-tooltip class="item" effect="dark" content="点击退出" placement="bottom">
          <i class="el-icon-switch-button" @click="exitSystem"></i>
         </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  methods: {
    // 退出系统
    exitSystem () {
      console.log('退出系统')
      this.$router.push({
        name: 'login'
      })
    },
    // 全屏展示
    buttoncli () {
      if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
        this.$message({
          message: '不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style>
.el-badge__content{
  margin-top: 12px !important;
}
</style>

<style lang="scss" scoped>
@import './demoModelHeader.scss'
</style>
