<script setup>
import { ref } from 'vue'

const prompt = ref('')
const key = ref('')
const loading = ref(false)
const margin = { 'margin-top': '32px' }
import Chart from '../components/chart.vue'
const options = ref({
  "title": {
    "text": "Upward Trend - 1000 Data Points",
    "left": "center",
    "textStyle": {
      "color": "#333",
      "fontSize": 18
    }
  },
  "xAxis": {
    "type": "category",
    "data": (function () {
      var data = [];
      for (var i = 1; i <= 1000; i++) {
        data.push("Data Point " + i);
      }
      return data;
    })(),
    "axisLine": {
      "lineStyle": {
        "color": "#666"
      }
    },
    "axisLabel": {
      "color": "#666",
      "interval": 99  // Adjust the interval for better readability
    }
  },
  "yAxis": {
    "type": "value",
    "name": "Values",
    "axisLine": {
      "lineStyle": {
        "color": "#666"
      }
    },
    "axisLabel": {
      "color": "#666"
    },
    "splitLine": {
      "lineStyle": {
        "color": "#ddd"
      }
    }
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "cross"
    },
    "backgroundColor": "rgba(255, 255, 255, 0.9)",
    "borderWidth": 1,
    "borderColor": "#ccc",
    "padding": 10,
    "textStyle": {
      "color": "#333"
    }
  },
  "series": [
    {
      "name": "Upward Trend",
      "type": "line",
      "data": (function () {
        var data = [];
        for (var i = 1; i <= 1000; i++) {
          data.push(Math.random() * 10 + i);
        }
        return data;
      })(),
      "smooth": true,
      "itemStyle": {
        "color": "#2ECC71"  // Green color
      },
      "lineStyle": {
        "color": "#2ECC71"  // Green color
      },
      "areaStyle": {
        "color": "rgba(144, 238, 144, 0.2)"  // Light green area fill
      }
    }
  ]
})
const URL = `https://iwa1uk4vy8.execute-api.us-east-1.amazonaws.com/dev/chartprompt`
const getMagicConfiguration = async () => {
  loading.value = true
  const response = await fetch(URL, { method: 'POST', body: JSON.stringify({ apiKey: key.value, prompt: prompt.value }) })
  const config = await response.json();
  options.value = config
  loading.value = false

}
</script>

<template>
  <main>
    <el-input :style="margin" v-model="key" placeholder="ChatGPT API KEY" />
    <el-input :style="margin" v-model="prompt" :autosize="{ minRows: 4, maxRows: 10 }" type="textarea" placeholder="A upgoing trend with a 1000 datapoint in a greenish color" />
    <el-button :disabled="loading" type="primary" @click="getMagicConfiguration" :style="margin">Create!</el-button>
    <Chart :loading="loading" :style="margin" :options="options" />
  </main>
</template>
<style scoped></style>
