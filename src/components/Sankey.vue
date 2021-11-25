<template>
  <div class="line-wrapper">
    <v-chart :options="sankey" autoresize />
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
                    }
                ],
                links: [
                    {
                        source: 'Horses',
                        target: 'Removed',
                        value: 9181
                    },
                    {
                        source: 'Burros',
                        target: 'Removed',
                        value: 1643
                    },
                    {
                        source: 'Horses',
                        target: 'Adopted',
                        value: 3311
                    },
                    {
                        source: 'Burros',
                        target: 'Adopted',
                        value: 1430
                    },
                    {
                        source: 'Horses',
                        target: 'Sold to Good Homes',
                        value: 1096
                    },
                    {
                        source: 'Burros',
                        target: 'Sold to Good Homes',
                        value: 326
                    },
                    {
                        source: 'Horses',
                        target: 'Off-Range',
                        value: 50354
                    },
                    {
                        source: 'Burros',
                        target: 'Off-Range',
                        value: 1343
                    }
                ]
            }
        }
    })
};
</script>