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

export default {
  components: {
      "v-chart": ECharts,
  },
    data: () => ({
        bar: {
            xAxis: {
                data: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'bar',
                    data: [63,75,24,92]
                }
            ],
            title: {
                text: 'Wild Horse and Burro Adoptions',
                x: 'center'
            }
        }
    })
};
</script>