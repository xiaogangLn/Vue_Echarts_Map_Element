<template>
  <div class="echartsMap">
    <div class="echartsMap-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>Echarts条形、折线图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="echartsMap-content">
      <div class="echartsMap-content-change">
        <el-button-group>
          <el-button type="primary" @click="changeEcharts(0)">折线图</el-button>
          <el-button type="primary" @click="changeEcharts(1)">条形图</el-button>
        </el-button-group>
        <label for="" class="m-l-20 label-size">数据线颜色：</label>
        <el-input v-model="inputEchartsColor" style="width: 200px" size="small" maxlength="7" placeholder="请输入6为字母数字混合"></el-input>
        <el-button type="primary" class="m-l-10" size="small" @click="changeColor">切&nbsp;换</el-button>
        <label for="" class="m-l-20 label-size">改变名称：</label>
        <el-input v-model="inputEchartsName" style="width: 200px" size="small" placeholder="请输入名称"></el-input>
        <el-button type="primary" class="m-l-10" size="small" @click="changeName">改&nbsp;变</el-button>
        <label for="" class="m-l-20 label-size">改变名称水平显示位置：</label>
        <el-select v-model="valueSelect" @change="changeSelect($event)" size="small" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <div class="echartsMap-content-change">
        <label for="" class="label-size">改变X、Y轴的颜色：</label>
        <el-input v-model="inputEchartsXYColor" style="width: 200px" size="small" maxlength="7" placeholder="请输入6为字母数字混合"></el-input>
        <el-button type="primary" class="m-l-10" size="small" @click="changeXYColor">改&nbsp;变</el-button>
        <label for="" class="label-size m-l-20">改变X名称：</label>
        <el-input v-model="nameX" style="width: 200px" size="small" maxlength="7" placeholder="请输入6为字母数字混合"></el-input>
        <el-button type="primary" class="m-l-10" size="small" @click="changeXname">改&nbsp;变</el-button>
        <label for="" class="label-size m-l-20">改变Y轴的名称：</label>
        <el-input v-model="nameY" style="width: 200px" size="small" maxlength="7" placeholder="请输入6为字母数字混合"></el-input>
        <el-button type="primary" class="m-l-10" size="small" @click="changeYname">改&nbsp;变</el-button>
      </div>
      <div ref="echartsDemo" class="echartsDemo"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      echartsType: 'line',
      echartsColor: 'rgb(33,148,246)',
      inputEchartsColor: '',
      echartsName: '备件消耗统计',
      inputEchartsName: '',
      valueSelect: '左边',
      inputEchartsXYColor: '',
      echartsX: 'rgb(33,148,246)',
      echartsY: 'rgb(33,148,246)',
      echartsPosition: 'left',
      nameX: '省份',
      nameY: '数值',
      options: [
        {
          value: 'left',
          label: '左边'
        },
        {
          value: 'right',
          label: '右边'
        },
        {
          value: 'center',
          label: '中间'
        }
      ]
    }
  },
  mounted () {
    this.echartsDemoFun()
    window.addEventListener('resize', () => {
      this.echart.resize()
    })
  },
  methods: {
    // 改变X轴名称
    changeXname () {
      this.echartsDemoFun()
    },
    // 改变Y轴名称
    changeYname () {
      this.echartsDemoFun()
    },
    // 改变X、Y轴的颜色
    changeXYColor () {
      if (!this.inputEchartsXYColor) {
        this.$message.error('请输入颜色')
      } else {
        this.echartsX = '#' + this.inputEchartsXYColor
        this.echartsY = '#' + this.inputEchartsXYColor
        this.echartsDemoFun()
      }
    },
    // 改变名称
    changeName () {
      this.echartsName = this.inputEchartsName
      this.echartsDemoFun()
    },
    // 改变名称显示位置
    changeSelect (val) {
      console.log(val)
      this.echartsPosition = val
      console.log(this.echartsPosition)
      this.echartsDemoFun()
    },
    // 改变echarts
    changeEcharts (val) {
      if (val === 0) {
        this.echartsType = 'line'
      } else if (val === 1) {
        this.echartsType = 'bar'
      }
      this.echartsDemoFun()
    },
    // 改变echarts图形颜色
    changeColor () {
      if (!this.inputEchartsColor) {
        this.$message.error('请输入颜色')
      } else {
        this.echartsColor = '#' + this.inputEchartsColor
        console.log(this.echartsColor)
        this.echartsDemoFun()
      }
    },
    // echarts图
    echartsDemoFun () {
      this.echart = window.echarts.init(this.$refs.echartsDemo)
      const option = {
        title: {
          text: this.echartsName,
          x: this.echartsPosition,
          top: '0',
          textStyle: {
            color: this.echartsColor,
            fontSize: 15
          }
        },
        grid: {
          top: '17%',
          bottom: '10%',
          left: '3.5%',
          right: '3%'
        },
        tooltip: {
          trigger: 'axis',
          label: {
            show: true
          }
        },
        xAxis: {
          name: this.nameX,
          boundaryGap: true, // 默认，坐标轴留白策略
          axisLine: {
            lineStyle: {
              color: this.echartsX,
              width: 2 // 这里是为了突出显示加上的
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: [
            '武汉', '襄阳', '黄冈', '荆门', '十堰', '随州',
            '鄂州', '恩施', '宜昌', '孝感', '咸宁', '仙桃',
            '潜江', '天门', '黄石', '荆州', '神农架'
          ]
        },
        yAxis: {
          name: this.nameY,
          axisLine: {
            lineStyle: {
              color: this.echartsY,
              width: 2 // 这里是为了突出显示加上的
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            type: this.echartsType,
            symbolSize: 7,
            data: [
              2000, 1800, 2800, 900, 1600, 2000,
              3000, 2030, 1356, 1900, 4000, 3000,
              2000, 3000, 4200, 3200, 3800
            ],
            itemStyle: {
              color: this.echartsColor,
              borderWidth: 1
            }
          }
        ]
      }
      this.echart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './echartsMap.scss'
</style>
