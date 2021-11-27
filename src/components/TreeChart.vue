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
              value: 7161,
              children: [
                {
                  name: 'Arizona - Horses',
                  value: 539
                },
                {
                  name: 'Arizona - Burros',
                  value: 6622
                }
              ]
            },
            {
              name: 'California',
              value: 10569,
              children: [
                {
                  name: 'California - Horses',
                  value: 7312
                },
                {
                  name: 'California - Burros',
                  value: 3257
                }
              ]
            },
            {
              name: 'Colorado',
              value: 2412,
              children: [
                {
                  name: 'Colorado - Horses',
                  value: 2412
                }
              ]
            },
            {
              name: 'Idaho',
              value: 639,
              children: [
                {
                  name: 'Idaho - Horses',
                  value: 639
                }
              ]
            },
            {
              name: 'Montana',
              value: 180,
              children: [
                {
                  name: 'Montana - Horses',
                  value: 180
                }
              ]
            },
            {
              name: 'Nevada',
              value: 42994,
              children: [
                {
                  name: 'Nevada Horses',
                  value: 42994
                },
                {
                  name: 'Nevada - Burros',
                  value: 4087
                }
              ]
            },
            {
              name: 'New Mexico',
              value: 237,
              children: [
                {
                  name: 'New Mexico - Horses',
                  value: 237
                }
              ]
            },
            {
              name: 'Oregon',
              value: 6048,
              children: [
                {
                  name: 'Oregon - Horses',
                  value: 6009
                },
                {
                  name: 'Oregon - Burros',
                  value: 39
                }
              ]
            },
            {
              name: 'Utah',
              value: 4121,
              children: [
                {
                  name: 'Utah - Horses',
                  value: 3672
                },
                {
                  name: 'Utah - Burros',
                  value: 449
                }
              ]
            },
            {
              name: 'Wyoming',
              value: 7741,
              children: [
                {
                  name: 'Wyoming - Horses',
                  value: 7741
                }
              ]
            }
          ]
        }
      ]  
    }
  })
};
</script>