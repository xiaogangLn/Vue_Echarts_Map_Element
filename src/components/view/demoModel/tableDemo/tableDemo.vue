<template>
  <div class="tableDemo">
     <div class="tableDemo-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>普通表格及分页(各行换色)</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 筛选项 -->
    <div class="tableDemo-screen">
      <div class="tableDemo-screen-cn">
        <label for="" class="label-size m-l-5">姓名：</label>
        <el-input v-model="inputValue" size="small" style="width: 200px" placeholder="请输入内容"></el-input>
        <label for="" class="m-l-20 label-size">状态：</label>
        <el-select v-model="valueSelect" clearable size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label for="" class="m-l-20 label-size">选择日期：</label>
        <el-date-picker
          v-model="valueDate"
          align="right"
          type="date"
          placeholder="选择日期"
          size="small"
          style="width: 200px"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="tableDemo-screen-btn">
        <el-button type="primary" size="small" icon="el-icon-search" @click="searchTable">查&nbsp;询</el-button>
      </div>
    </div>
    <div class="tableDemo-content">
      <template>
        <el-table
          v-loading="loading"
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="更新日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 分页 -->
    <div class="tableDemo-page p-l-20 p-b-15">
        <el-pagination
          class="pageIndex"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="sizes, prev, pager, next"
          :total="100">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage2: 1,
      valueSelect: '',
      valueDate: '',
      inputValue: '',
      loading: false,
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          status: '已处理',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          status: '待处理',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          status: '已发送',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          status: '未处理',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      options: [
        {
          value: '已处理',
          label: '已处理'
        },
        {
          value: '待处理',
          label: '待处理'
        },
        {
          value: '已发送',
          label: '已发送'
        },
        {
          value: '未处理',
          label: '未处理'
        }
      ]
    }
  },
  methods: {
    // 查看
    handleEdit (index, row) {
      console.log(index, row)
    },
    // 删除
    handleDelete (index, row) {
      console.log(index, row)
    },
    // 改变每页显示条数
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    // 改变页数
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    // 查询
    searchTable () {
      if (!this.valueSelect && !this.valueDate && !this.inputValue) {
        this.$message.error('请填写筛选项')
      } else {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000)
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
@import './tableDemo.scss'
</style>
