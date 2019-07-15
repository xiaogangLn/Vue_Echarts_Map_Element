<template>
  <div class="PDFplayer">
    <div class="videoPlayer-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>PDF查看</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="videoPlayer-content">
      <object :data="pdf" type="" class="containerPdf"></object>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      pdf: 'https://crcc12-4.obs.cn-north-1.myhuaweicloud.com:443/%E5%B7%A5%E7%A8%8B%E6%8A%80%E6%9C%AF%E4%BA%A4%E6%B5%81%E5%B9%B3%E5%8F%B0%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3%281%29%281%29%281%29%281%29%281%29.pdf'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.videoPlayer-title .el-breadcrumb{
  font-size: 16px;
  -webkit-font-smoothing: subpixel-antialiased;
}
</style>

<style lang="scss" scoped>
@import './PDFplayer.scss'
</style>
