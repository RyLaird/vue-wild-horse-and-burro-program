<template>
  <div class="line-wrapper">
    <v-chart :options="line" autoresize />
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'

export default {
  components: {
      "v-chart": ECharts,
  },
    data: () => ({
        line: {
            xAxis: {
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
            },
            yAxis: {
                type: 'value'
            },
            width: '80%',
            height: '80%',
            color: ['#00695C', '#81D4FA'],
            series: [
                {
                    name: "Horses Adopted",
                    type: 'line',
                    data: [2232, 2033, 1789, 2331, 2440, 2905, 2459, 3774, 3311, 5698],
                    symbol: 'circle',
                    symbolSize: 8
                },
                {
                    name: "Burros Adopted",
                    type: 'line',
                    data: [351, 278, 346, 300, 472, 612, 699, 1356, 1430, 1671],
                    symbol: 'circle',
                    symbolSize: 8
                },
                {
                    name: 'Horses Sold',
                    type: 'line',
                    data: [320, 22, 23, 88, 179, 518, 1201, 1538, 1096, 726],
                    lineStyle: {
                        type: 'dashed'
                    },
                    // symbol: 'circle',
                    symbolSize: 8
                },
                {
                    name: 'Burros Sold',
                    type: 'line',
                    data: [82, 43, 64, 180, 32, 64, 250, 429, 326, 542],
                    lineStyle: {
                        type: 'dashed'
                    },
                    // symbol: 'circle',
                    symbolSize: 8
                }
            ],
            // title: {
            //     text: 'Wild Horse and Burro Adoptions',
            //     x: 'center'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                itemWidth: 60
            }
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