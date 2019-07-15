<template>
  <div class="videoPlayer">
    <div class="videoPlayer-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>视频播放</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="videoPlayer p-l-20">
      <div class="videoPlayer-dateils">
        <p>视频播放组件使用说明：</p>
        <p class="m-l-10">1.使用vue视频播放插件，vue-video-player。</p>
        <p class="m-l-10">2.使用方法，请在百度自行查找。这里不做阐述。</p>
        <p class="m-l-10">3.demo演示：</p>
        <div class="m-t-10">
          <video-player  class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
          ></video-player>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: 'https://crcc12-4.obs.cn-north-1.myhuaweicloud.com/obs-video/%E9%93%81%E8%B7%AF%E5%BB%BA%E8%AE%BE.mp4', // 路径
          type: 'video/mp4' // 类型
        }, {
          src: '//path/to/video.webm',
          type: 'video/webm'
        }],
        poster: '@/assets/image/admin-bg.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
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

<style lang="scss" scoped>
@import './videoPlayer'
</style>
