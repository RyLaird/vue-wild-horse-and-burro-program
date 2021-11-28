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
            // color: ['#bfdda6', '#C0C0C0', '#bfdda6', '#C0C0C0', '#C0C0C0', '#bfdda6', '#bfdda6', '#bfdda6', '#bfdda6', '#2d7c61'],
            height: '80%',
            width: '80%',
            series: {
                type: 'sankey',
                layout: 'none',
                // emphasis: {
                //     focus: 'adjacency'
                // },
                // levels: [{
                //     depth: 0,
                //     itemStyle: {
                //         color: '#C0C0C0'
                //     }
                // }, {
                //     depth: 1,
                //     itemStyle: {
                //         color: '#2d7c61'
                //     }
                // }],
                data: [
                    {
                        name: 'Horses',
                        value: 71735,
                        depth: 0,
                        itemStyle: {
                            color: '#8D6E63'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#5D4037'
                        }
                    },
                    {
                        name: 'Burros',
                        value: 14454,
                        depth: 0,
                        itemStyle: {
                            color: '#BCAAA4'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#8D6E63'
                        }
                    },
                    {
                        name: 'Removed',
                        depth: 2,
                        itemStyle: {
                            color: '#81D4FA'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    },
                    {
                        name: 'Adopted',
                        depth: 2,
                        itemStyle: {
                            color: '#AED581'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    },
                    {
                        name: 'Sold to Good Homes',
                        depth: 2,
                        itemStyle: {
                            color: '#BA68C8'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16,
                            overflow: 'break'
                        }
                    },
                    {
                        name: 'Off-Range',
                        value: 56676,
                        depth: 1,
                        itemStyle: {
                            color: '#00695C'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    },
                    {
                        name: 'Corrals',
                        depth: 2,
                        itemStyle: {
                            color: '#00695C'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    },
                    {
                        name: 'Pastures',
                        depth: 2,
                        itemStyle: {
                            color: '#00695C'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    },
                    {
                        name: 'Public Pastures',
                        depth: 2,
                        itemStyle: {
                            color: '#00695C'
                        },
                        label: {
                            fontWeight: 'bold',
                            fontSize: 16
                        }
                    }
                ],
                links: [
                    {
                        source: 'Horses',
                        target: 'Removed',
                        value: 11748,
                        lineStyle: {
                            color: '#81D4FA',
                            opacity: .4
                        }
                    },
                    {
                        source: 'Burros',
                        target: 'Removed',
                        value: 1918,
                        lineStyle: {
                            color: '#81D4FA',
                            opacity: .4
                        }
                    },
                    {
                        source: 'Horses',
                        target: 'Adopted',
                        value: 5698,
                        lineStyle: {
                            color: '#AED581',
                            opacity: .6
                        }
                    },
                    {
                        source: 'Burros',
                        target: 'Adopted',
                        value: 1671,
                        lineStyle: {
                            color: '#AED581',
                            opacity: .6
                        }
                    },
                    {
                        source: 'Horses',
                        target: 'Sold to Good Homes',
                        value: 726,
                        lineStyle: {
                            color: '#BA68C8',
                            opacity: .7
                        }
                    },
                    {
                        source: 'Burros',
                        target: 'Sold to Good Homes',
                        value: 542,
                        lineStyle: {
                            color: '#BA68C8',
                            opacity: .7
                        }
                    },
                    {
                        source: 'Horses',
                        target: 'Off-Range',
                        value: 55478,
                        lineStyle: {
                            color: '#00695C',
                            opacity: .3
                        }
                    },
                    {
                        source: 'Burros',
                        target: 'Off-Range',
                        value: 1198,
                        lineStyle: {
                            color: '#00695C',
                            opacity: .3
                        }
                    },
                    {
                        source: 'Off-Range',
                        target: 'Corrals',
                        value: 16432,
                        lineStyle: {
                            color: '#00695C',
                            opacity: .3
                        }
                    },
                    {
                        source: 'Off-Range',
                        target: 'Pastures',
                        value: 37892,
                        lineStyle: {
                            color: '#00695C',
                            opacity: .3
                        }
                    },
                    {
                        source: 'Off-Range',
                        target: 'Public Pastures',
                        value: 1154,
                        lineStlye: {
                            color: '#00695C',
                            opacity: .8
                        }
                    }
                ]
            }
        }
    })
};
</script>

<style scoped>

.echarts {
    width: 100%;
    height: 500px;
}


</style>