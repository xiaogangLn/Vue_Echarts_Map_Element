<template>
  <div class="demoModelCn">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="传值问题" name="first">
        <childrenModel ref="childrenModel" @primaryParentFun="showChildData" :propsData="propsData"></childrenModel>
      </el-tab-pane>
      <el-tab-pane label="弹框问题" name="second">
        <el-button type="success" size="small" @click="dialogVisible = true">触发弹框</el-button>
      </el-tab-pane>
      <el-tab-pane label="消息提示" name="third">
        <el-button
          plain
          @click="open1">
          消息成功通知
        </el-button>
        <el-button
          plain
          @click="open2">
          消息警告通知
        </el-button>
        <el-button
          plain
          @click="open3">
          无状态值得消息
        </el-button>
        <el-button
          plain
          @click="open4">
          消息错误通知
        </el-button>
        <br>
        <br>
        <el-button :plain="true" @click="open6">成功通知</el-button>
        <el-button :plain="true" @click="open7">警告通知</el-button>
        <el-button :plain="true" @click="open5">消息通知</el-button>
        <el-button :plain="true" @click="open8">错误通知</el-button>
      </el-tab-pane>
      <el-tab-pane label="文字提示" name="fourth">
        <el-tooltip placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <el-button>文字提示</el-button>
        </el-tooltip>
      </el-tab-pane>
      <el-tab-pane label="等待加载" name="fifth">
        <el-button type="primary" @click="openFullScreen"  v-loading.fullscreen.lock="fullscreenLoading">
          加载Loading
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="字体图标" name="Sixth">
        <p>
          font-awesome字体图标使用：<i class="fa fa-align-left"></i><br><br>
          代码部分显示：{{codeAsIt}}<br><br>
          说明： i 标签里的class中的 'fa fa-'是固定写法，'fa-' 后面的属于图标名称,注意复制图标名称，<br><br>
          图标库官网地址： <a href="http://fontawesome.dashgame.com/ ">http://fontawesome.dashgame.com/ </a>如果有不清楚的地方自行查看文档
        </p>
      </el-tab-pane>
      <el-tab-pane label="时间问题" name="Seventh">
         <el-input v-model="inputDate" size="small" placeholder="请输入数字" style="width: 250px;"></el-input>
         <el-button type="primary" size="small" class="m-l-10" icon="el-icon-search" @click="dateCalculation()">搜索</el-button>
         <br>
         <br>
         <br>
         显示年月日：{{showDate}}
         <br>
         <br>
         <br>
         显示年月日时分秒：{{showDateList}}
         <br>
         <br>
         <br>
         更多详尽的moment 时间处理格式： <a href="https://www.jianshu.com/p/e5b7c0606a3f">https://www.jianshu.com/p/e5b7c0606a3f</a>
      </el-tab-pane>
      <el-tab-pane label="服务问题" name="eighth">
        <p>说明：</p>
        <p>1.每次单页面请求服务，必将服务引入在script 中添加{{httpData}},引入路径切记使用单引号</p>
        <p>2.在相应的单页面应用中使用“mixins”注册当前单页面应用的http服务，如有疑问请查看：<a href="https://www.jianshu.com/p/bcff647d24ec">https://www.jianshu.com/p/bcff647d24ec</a></p>
        <p>
          const url = "post请求地址"<br>
          const = "需要传递的参数"<br>
          this.apiPost(url, data).then( res = > {<br>
            &nbsp;&nbsp;&nbsp;console.log(res)  // res 为请求返回的值<br>
          })
        </p>
        <p>
          const url = "get请求地址"<br>
          this.apiGet(url).then( res = > {<br>
            &nbsp;&nbsp;&nbsp;console.log(res)  // res 为请求返回的值<br>
          })
        </p>
        <p style="color: red;">如有疑问请自行查看项目跟目录下src/assets/js/http.js文件</p>
      </el-tab-pane>
      <el-tab-pane label="树形目录" name="ninth">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <p>
          点击返回选中的信息：{{treeCatalogue}}
        </p>
        <p>如需修改，请自行观察值，进行值业务操作。</p>
      </el-tab-pane>
      <el-tab-pane label="自定义图标字体" name="tenth">
        <span class="iconfont demo-Size">&#xe60a;</span>
        <br>
        <p>代码展示：</p>
        <p class="m-l-10">{{iconfontDemo}}</p>
        <p>引入方法：</p>
        <p class="m-l-10">
          引入方法，请查看<a href="https://www.jianshu.com/p/e7329afafb4b">https://www.jianshu.com/p/e7329afafb4b</a><br><br>
          至于修改iconfont.css 文件，（建议不用修改），使用方法请在下载的图标压缩包解压之后运行index.html文件查看
        </p>
      </el-tab-pane>
    </el-tabs>
    <p v-if="chuldObject !== ''">
      {{chuldObject}}&nbsp;+&nbsp;{{chuldObjectType}}
    </p>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :modal=false
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import childrenModel from './childrenModel/children'

export default {
  components: {
    childrenModel
  },
  data () {
    return {
      activeName: 'first',
      propsData: 'props传值',
      codeAsIt: '<i class="fa fa-align-left">',
      iconfontDemo: '<span class="iconfont demo-Size">&#xe60a;</span>',
      chuldObject: '',
      inputDate: '',
      chuldObjectType: null,
      dialogVisible: false,
      fullscreenLoading: false,
      showDate: '',
      showDateList: '',
      httpData: 'import http from "@/assets/http/http"',
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeCatalogue: ''
    }
  },
  mounted () {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      if (tab.label === '传值问题') {
        console.log(this.$refs.childrenModel.parentChildFun)
        this.$refs.childrenModel.parentChildFun(1)
      }
    },
    // 被调用的父组件方法
    showChildData (val) {
      this.chuldObject = val.dataName
      this.chuldObjectType = val.dateType
    },
    // 弹框方法
    handleClose (done) {
      console.log(done)
    },
    // 文字提示
    open1 () {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },
    open2 () {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      })
    },
    open3 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    },
    open4 () {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    },
    open5 () {
      this.$message('这是一条消息提示')
    },
    open6 () {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open7 () {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open8 () {
      this.$message.error('错了哦，这是一条错误消息')
    },
    // 启动等待加载
    openFullScreen () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    // 时间处理插件
    dateCalculation () {
      const reNumber = /^\d+$/
      if (reNumber.test(this.inputDate)) {
        console.log('是')
        this.showDate = window.moment(Number(this.inputDate)).format('YYYY-MM-DD')
        this.showDateList = window.moment(Number(this.inputDate)).format('YYYY-MM-DD HH:mm:ss')
        console.log(this.showDate)
      } else {
        this.$message.error('请输入数字')
      }
    },
    // 树形目录事件
    handleNodeClick (val) {
      console.log(val)
      this.treeCatalogue = val
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
