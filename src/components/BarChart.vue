<template>
  <div>
    <v-chart :options="bar" autoresize/>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/markLine'

export default {
  components: {
    "v-chart": ECharts,
  },
  data: () => ({
    bar: {
      // title: {
      //   text: ''
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      // legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['1971', '2021'],
        axisLabel: {
          fontSize: 20  
        }
      },
      width: '80%',
      height: '80%',
      series: [
        {
          name: 'Total Horses and Burros',
          type: 'bar',
          // stack: 'total',
          data: [
            25300,
            {
              name: 2021,
              value: 86189,
              itemStyle: {
                color: '#91cd8c'
              }
            }
          ],
          markLine: {
            label: {
              show: true,
              position: 'middle',
              formatter: "3.5 X GREATER",
              fontWeight: "bold",
              fontSize: 28
            },
            lineStyle: {
              type: 'dashed',
              width: 2,
              color: 'black',
              opacity: .8
            },
            symbolSize: 14,
            data: [[{ type: 'min' }, { type: 'max' }]]
          }
        }
      ]
    }
  })  
};
</script>

<style scoped>
.echarts {
    width: 100%;
    height: 400px;
}
</style>