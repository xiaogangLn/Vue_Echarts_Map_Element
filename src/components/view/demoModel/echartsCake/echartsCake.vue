<template>
  <div class="echartsCake">
    <div class="echartsCake-title p-t-20 p-l-20 p-b-15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/demoModel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>Echarts饼状图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="p-l-20 p-t-20 p-b-20">
      如需改变颜色及数据，请修改 return 中 m2RData的值，至于其他参数值的更改请参考，折线  图。
    </div>
    <!-- echarts饼状图 -->
    <div class="echartsCake" ref="echartsCake"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      m2R2Data: [
        {value: 335, legendname: '种类01', name: '种类01  335', itemStyle: {color: '#8d7fec'}},
        {value: 310, legendname: '种类02', name: '种类02  310', itemStyle: {color: '#5085f2'}},
        {value: 234, legendname: '种类03', name: '种类03  234', itemStyle: {color: '#e75fc3'}},
        {value: 154, legendname: '种类04', name: '种类04  154', itemStyle: {color: '#f87be2'}},
        {value: 335, legendname: '种类05', name: '种类05  335', itemStyle: {color: '#f2719a'}},
        {value: 335, legendname: '种类06', name: '种类06  335', itemStyle: {color: '#fca4bb'}},
        {value: 335, legendname: '种类07', name: '种类07  335', itemStyle: {color: '#f59a8f'}},
        {value: 335, legendname: '种类08', name: '种类08  335', itemStyle: {color: '#fdb301'}},
        {value: 335, legendname: '种类09', name: '种类09  335', itemStyle: {color: '#57e7ec'}},
        {value: 335, legendname: '种类10', name: '种类10  335', itemStyle: {color: '#cf9ef1'}},
        {value: 335, legendname: '种类09', name: '种类11  335', itemStyle: {color: '#57e7ec'}},
        {value: 335, legendname: '种类10', name: '种类12  335', itemStyle: {color: '#cf9ef1'}}
      ]
    }
  },
  mounted () {
    this.echartsCakeFun()
    window.addEventListener('resize', () => {
      this.myCharts.resize()
    })
  },
  methods: {
    echartsCakeFun () {
      this.myCharts = window.echarts.init(this.$refs.echartsCake)
      const option = {
        title: [
          {
            // text: '标题',
            textStyle: {
              fontSize: 16,
              color: 'black'
            },
            left: '2%'
          },
          {
            text: '合计',
            subtext: 12312 + '个',
            textStyle: {
              fontSize: 20,
              color: 'black'
            },
            subtextStyle: {
              fontSize: 20,
              color: 'black'
            },
            textAlign: 'center',
            x: '34.5%',
            y: '44%'
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: function (parms) {
            var str = parms.seriesName + '</br>' +
            parms.marker + '' + parms.data.legendname + '</br>' +
            '数量：' + parms.data.value + '</br>' +
            '占比：' + parms.percent + '%'
            return str
          }
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: '70%',
          align: 'left',
          top: 'middle',
          textStyle: {
            color: '#8C8C8C'
          },
          height: 250
        },
        series: [
          {
            name: '标题',
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, // 饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function (parms) {
                  return parms.data.legendname
                }
              }
            },
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            data: this.m2R2Data
          }
        ]
      }
      this.myCharts.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './echartsCake.scss'
</style>
