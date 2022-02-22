<template>
  <div id="chart" :style="{width: width, height: height}" />
</template>

<script>
import * as echarts from 'echarts/core'
// 使用canvas画布
import { CanvasRenderer } from 'echarts/renderers'
// 组件
import { GridComponent, TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
// 图表
import { LineChart, BarChart } from 'echarts/charts'
// 引入
echarts.use([
  CanvasRenderer,
  TitleComponent,
  GridComponent,
  LineChart,
  TooltipComponent,
  LegendComponent,
  BarChart
])
export default {
  name: 'Chart',
  components: {},
  props: {
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '300px'
    },
    title: {
      type: Object,
      default() {
        return {
          text: '默认数据'
        }
      }
    },
    tooltip: {
      type: Object,
      default() {
        return {}
      }
    },
    xAxis: {
      type: Object,
      default() {
        return {
          type: 'category', // x轴样式
          data: ['A', 'B', 'C'] // x轴数据
        }
      }
    },
    yAxis: {
      type: Object,
      default() {
        return {}
      }
    },
    series: {
      type: Array,
      default() {
        return [
          {
            data: [1, 2, 3], // 数据
            type: 'line' // 线性展示
          }
        ]
      }
    },
    legend: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.getEcharts()
  },
  methods: {
    getEcharts() {
      const myChart = echarts.init(document.getElementById('chart'))
      const that = this
      myChart.setOption({
        title: that.title, // 图表标题 样式
        tooltip: that.tooltip,
        xAxis: that.xAxis,
        legend: that.legend,
        yAxis: that.yAxis,
        series: that.series
      })
    }
  }
}
</script>

<style scoped>

</style>
