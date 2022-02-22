<template>
  <div class="echarts">
    <chart
      width="500px"
      height="500px"
      :title="title"
      :tooltip="tooltip"
      :x-axis="xAxis"
      :y-axis="yAxis"
      :series="series"
      :legend="legend"
    />
  </div>
</template>

<script>
import Chart from '@/components/chart'

export default {
  name: 'Echarts',
  components: {
    Chart
  },
  data() {
    return {
      title: {
        text: '折线图',
        textStyle: {
          color: 'red'
        }
      },
      tooltip: {
        // 提示框
        trigger: 'axis', // 触发类型 item主要用于散点图 ，axis主要用于折线图，柱形图
        axisPointer: {
          type: 'cross' // 提示框类型
        }
      },
      xAxis: {
        type: 'category', // x轴样式
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // x轴数据
      },
      yAxis: {
        type: 'value', // y轴样式
        name: '数值' // y轴名称
      },
      series: [
        {
          data: [50, 100, 50, 200, 300, 250, 111], // 数据
          type: 'line', // 线性展示
          name: '直接访问' // 数据名称
        },
        {
          data: [150, 200, 150, 300, 200, 650, 411],
          type: 'line', // 柱状图展示
          name: '间接访问' // 数据名称
        }
      ],
      legend: { // 图例组件可以通过点击图例控制哪些系列不显示。
        type: 'plain', // plain 普通图例  scroll可滚动翻页的图例
        show: true // 是否显示图例
      }
    }
  },
  mounted() {
    this.$Message({
      title: '我是消息框',
      bgColor: 'red'
    }, {
      btn: <el-button type='success'>按钮</el-button>
    }).init()
  }
}
</script>

<style scoped lang="scss">
.echarts {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
</style>
