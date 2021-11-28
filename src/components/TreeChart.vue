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
      textStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
      },
      aria: {
        enabled: true,
        // decal: {
        //   show: true
        // }
      },
      color: ['#2d7c61', '#70d1f2', '#bfdda6', '#FFCCE5', '#CCCCFF', '#FFE5CC', '#C0C0C0', '#B266FF', '#FF66B2', '#FFB266'],
      series: [
        {
          type: 'treemap',
          name: 'Home',
          height: '100%',
          roam: 'move',
          data: [
            {
              name: 'Arizona',
              value: 7161,
              children: [
                {
                  name: 'ARIZONA - Horses',
                  value: 539
                },
                {
                  name: 'ARIZONA- Burros',
                  value: 6622
                }
              ]
            },
            {
              name: 'California',
              value: 10569,
              children: [
                {
                  name: 'CALIFORNIA - Horses',
                  value: 7312
                },
                {
                  name: 'CALIFORNIA - Burros',
                  value: 3257
                }
              ]
            },
            {
              name: 'Colorado',
              value: 2412,
              children: [
                {
                  name: 'COLORADO - Horses',
                  value: 2412
                }
              ]
            },
            {
              name: 'Idaho',
              value: 639,
              children: [
                {
                  name: 'IDAHO - Horses',
                  value: 639
                }
              ]
            },
            {
              name: 'Montana',
              value: 180,
              children: [
                {
                  name: 'MONTANA- Horses',
                  value: 180
                }
              ]
            },
            {
              name: 'Nevada',
              value: 42994,
              children: [
                {
                  name: 'NEVADA - Horses',
                  value: 42994
                },
                {
                  name: 'NEVADA - Burros',
                  value: 4087
                }
              ]
            },
            {
              name: 'NEW MEXICO',
              value: 237,
              children: [
                {
                  name: 'NEW MEXICO - Horses',
                  value: 237
                }
              ]
            },
            {
              name: 'Oregon',
              value: 6048,
              children: [
                {
                  name: 'OREGON - Horses',
                  value: 6009
                },
                {
                  name: 'OREGON- Burros',
                  value: 39
                }
              ]
            },
            {
              name: 'Utah',
              value: 4121,
              children: [
                {
                  name: 'UTAH - Horses',
                  value: 3672
                },
                {
                  name: 'UTAH - Burros',
                  value: 449
                }
              ]
            },
            {
              name: 'Wyoming',
              value: 7741,
              children: [
                {
                  name: 'WYOMING - Horses',
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