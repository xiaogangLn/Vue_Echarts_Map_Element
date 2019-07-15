<template>
  <div class="IndexSystem">
    <indexHeader></indexHeader>
    <div class="IndexSystem-pg-content">
      <div class="IndexSystem-pg-menu">
        <mainSiderBar></mainSiderBar>
      </div>
      <div class="IndexSystem-pg-cn">
        <router-view class="IndexSystem-pg-cn-router"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import indexHeader from './demoModelHeader/demoModelHeader'
import mainSiderBar from './demoModelSide/demoModelSide'

export default {
  components: {
    indexHeader,
    mainSiderBar
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.IndexSystem{
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background-color: rgb(242, 246, 248);
//   background: url("../../../../../../assets/image/cad-bg.png") top no-repeat;
  background-size: cover;
  background-position: 0 0px;
  .IndexSystem-pg-menu{
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 201px;
    background-color: #12516D;
  }
  .IndexSystem-pg-cn{
    position: fixed;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 201px;
    overflow: auto;
  }
  .IndexSystem-pg-cn-router{
    width: 96%;
    margin: 20px auto;
    background-color: white;
    border-radius: 5px;
  }
}
</style>
