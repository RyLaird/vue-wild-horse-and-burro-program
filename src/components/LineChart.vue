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
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: "Horses",
                    type: 'line',
                    data: [2232, 2033, 1789, 2331, 2440, 2905, 2459, 3774, 3311]
                },
                {
                    name: "Burros",
                    type: 'line',
                    data: [351, 278, 346, 300, 472, 612, 699, 1356, 1430]
                }
            ],
            // title: {
            //     text: 'Wild Horse and Burro Adoptions',
            //     x: 'center'
            // },
            tooltip: {
                trigger: 'axis'
            },
        }
    })
};
</script>