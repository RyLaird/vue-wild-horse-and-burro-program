<template>
  <div id="pie">
    <v-chart :options="pie" autoresize:true/>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'


export default {
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      pie: {
        // title: {
        //   text: "Wild Horse Population by state",
        //   x: "center",
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data: ["Arizona", "California", "Colorado", "Idaho", "Montana", "Nevada", "New Mexico", "Oregon", "Utah", "Wyoming"],
        // },
        series: [
          {
            name: "Wild Horse Population",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 539, name: "Arizona" },
              { value: 7312, name: "California" },
              { value: 2412, name: "Colorado" },
              { value: 639, name: "Idaho" },
              { value: 180, name: "Montana" },
              {value: 42994, name: "Nevada"},
              {value: 237, name: "New Mexico"},
              {value: 6009, name: "Oregon"},
              {value: 3672, name: "Utah"},
              {value: 7741, name: "Wyoming"}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
};
</script>
