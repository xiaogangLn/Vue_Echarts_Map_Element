<template>
  <div class="demoModelSide">
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      class="m-t-20 el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#12516D"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
        <template slot="title">
          <i :class="item.ion"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="items in item.children" :key="items.name">
          <el-menu-item :index="items.id" @click="routerTabSide(items)">
            <router-link :to="items.toRouter">
              {{items.name}}
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <!-- <i class="el-icon-s-fold" v-if="!isCollapse" @click="pickUpMenu"></i>
    <i class="el-icon-s-unfold" v-if="isCollapse" @click="pickUpMenuOpen"></i> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menuList: [
        {
          name: '文件显示',
          id: '0',
          ion: 'el-icon-location',
          children: [
            {
              name: '视频查看',
              id: '0-0',
              toRouter: '/videoPlayer'
            },
            {
              name: 'PDF查看',
              id: '0-1',
              toRouter: '/PDFplayer'
            }
          ]
        },
        {
          name: '表格问题',
          id: '1',
          ion: 'el-icon-menu',
          children: [
            {
              name: '通用表格及分页',
              id: '0-0',
              toRouter: '/tableDemo'
            },
            {
              name: '滚动条表格及分页',
              id: '0-1',
              toRouter: '/specialTable'
            }
          ]
        },
        {
          name: '表单问题',
          id: '2',
          ion: 'el-icon-document',
          children: [
            {
              name: '带有校验规则的表单',
              id: '0-0',
              toRouter: '/fromSubmit'
            }
          ]
        },
        {
          name: 'Echarts问题',
          id: '3',
          ion: 'el-icon-setting',
          children: [
            {
              name: '条形、折线图',
              id: '0-0',
              toRouter: '/echartsMap'
            },
            {
              name: '饼状图',
              id: '0-1',
              toRouter: '/echartsCake'
            },
            {
              name: '地图',
              id: '0-2',
              toRouter: '/echartsChinaMap'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 路由跳转
    routerTabSide (val) {
      console.log(val)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 收起侧边栏
    pickUpMenu () {
      this.isCollapse = true
    },
    // 打开侧边栏
    pickUpMenuOpen () {
      this.isCollapse = false
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border-right: solid 1px #12516D !important;
}
/* .el-submenu__title *{
  margin-left: -91px !important;
}
.el-submenu {
  margin-right: 0px !important;
} */
/* .el-icon-location,
.el-icon-menu,
.el-icon-document,
.el-icon-setting{
  margin-right: 96px !important;
} */
</style>

<style>
.el-submenu__icon-arrow {
  margin-top: -4px !important;
}
</style>

<style lang="scss" scoped>
@import './demoModelSide.scss'
</style>
