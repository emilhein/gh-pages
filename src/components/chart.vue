<template>
    <v-chart class="chart" :option="options" />
</template>
  
<script setup>
import { use } from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { PieChart, LineChart } from "echarts/charts";
// import * as echart from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { provide } from "vue";
import "echarts";

// use([
//     ...echart
// ]);
const props = defineProps(['options'])


provide(THEME_KEY, "light");

</script>
  
<style scoped>
.chart {
    height: 400px;
}
</style>