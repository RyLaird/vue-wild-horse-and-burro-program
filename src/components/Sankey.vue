<template>
  <div class="line-wrapper">
    <v-chart :options="sankey" autoresize/>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/sankey";
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/grid'

export default {
  components: {
      "v-chart": ECharts,
  },
    data: () => ({
        sankey: {
            tooltip: {
                trigger: "item"
            },
            series: {
                type: 'sankey',
                layout: 'none',
                height: '90%',
                emphasis: {
                    focus: 'adjacency'
                },
                data: [
                    {
                        name: 'Horses',
                        value: 71735
                    },
                    {
                        name: 'Burros',
                        value: 14454
                    },
                    {
                        name: 'Removed'
                    },
                    {
                        name: 'Adopted'
                    },
                    {
                        name: 'Sold to Good Homes'
                    },
                    {
                        name: 'Off-Range'
                    },
                    {
                        name: 'Corrals'
                    },
                    {
                        name: 'Pastures',
                    },
                    {
                        name: 'Public Pastures'
                    }
                ],
                links: [
                    {
                        source: 'Horses',
                        target: 'Removed',
                        value: 11748
                    },
                    {
                        source: 'Burros',
                        target: 'Removed',
                        value: 1918
                    },
                    {
                        source: 'Horses',
                        target: 'Adopted',
                        value: 5698
                    },
                    {
                        source: 'Burros',
                        target: 'Adopted',
                        value: 1671
                    },
                    {
                        source: 'Horses',
                        target: 'Sold to Good Homes',
                        value: 726
                    },
                    {
                        source: 'Burros',
                        target: 'Sold to Good Homes',
                        value: 542
                    },
                    {
                        source: 'Horses',
                        target: 'Off-Range',
                        value: 55478
                    },
                    {
                        source: 'Burros',
                        target: 'Off-Range',
                        value: 1198
                    },
                    {
                        source: 'Off-Range',
                        target: 'Corrals',
                        value: 16432
                    },
                    {
                        source: 'Off-Range',
                        target: 'Pastures',
                        value: 37892
                    },
                    {
                        source: 'Off-Range',
                        target: 'Public Pastures',
                        value: 1154
                    }
                ]
            }
        }
    })
};
</script>