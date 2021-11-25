<template>
  <div>
    <v-chart :options="tree" autoresize/>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/treemap";
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/grid'

export default {
  components: {
    "v-chart": ECharts,
  },
  data: () => ({
    tree: {
      tooltip: {
        trigger: "item"
      },
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: 'Arizona',
              value: 539
            },
            {
              name: 'California',
              value: 7312
            },
            {
              name: 'Colorado',
              value: 2412
            },
            {
              name: 'Idaho',
              value: 639
            },
            {
              name: 'Montana',
              value: 180
            },
            {
              name: 'Nevada',
              value: 42994
            },
            {
              name: 'New Mexico',
              value: 237
            },
            {
              name: 'Oregon',
              value: 6009
            },
            {
              name: 'Utah',
              value: 3672
            },
            {
              name: 'Wyoming',
              value: 7741
            }
          ]
        }
      ]  
    }
  })
};
</script>