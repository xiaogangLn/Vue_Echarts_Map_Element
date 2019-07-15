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
          <el-menu-item :index="items.id" @click="routerTabSide(items)">{{items.name}}</el-menu-item>
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
              id: '0-0'
            },
            {
              name: 'PDF查看',
              id: '0-1'
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
              id: '0-0'
            },
            {
              name: '滚动条表格及分页',
              id: '0-1'
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
              id: '0-0'
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
              id: '0-0'
            },
            {
              name: '饼状图',
              id: '0-1'
            },
            {
              name: '地图',
              id: '0-2'
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
      if (val.name === '视频查看') {
        this.$router.push({
          path: '/videoPlayer'
        })
      } else if (val.name === 'PDF查看') {
        this.$router.push({
          path: '/PDFplayer'
        })
      } else if (val.name === '通用表格及分页') {
        this.$router.push({
          path: '/tableDemo'
        })
      } else if (val.name === '滚动条表格及分页') {
        this.$router.push({
          path: '/specialTable'
        })
      } else if (val.name === '带有校验规则的表单') {
        this.$router.push({
          path: '/fromSubmit'
        })
      } else if (val.name === '条形、折线图') {
        this.$router.push({
          path: '/echartsMap'
        })
      } else if (val.name === '饼状图') {
        this.$router.push({
          path: '/echartsCake'
        })
      } else if (val.name === '地图') {
        this.$router.push({
          path: '/echartsChinaMap'
        })
      }
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
