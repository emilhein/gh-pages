<template>
  <apexchart
    :options="options"
    :series="options.series"
    height="300"
  ></apexchart>

</template>

<script>
export default {
  name: "apex-chart",
  props: {
    dataSerie: {
      required: true,
      type: Object
    },
    labels: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      options: {
        chart: {
          type: "area",
          height: "300",
          foreColor: "#999",
          scroller: {
            enabled: true,
            track: {
              height: 7,
              background: "#e0e0e0"
            },
            thumb: {
              height: 10,
              background: "#94E3FF"
            },
            scrollButtons: {
              enabled: true,
              size: 9,
              borderWidth: 2,
              borderColor: "#00E396",
              fillColor: "#00E396"
            },
            padding: {
              left: 30,
              right: 20
            }
          },
          stacked: true,
          dropShadow: {
            enabled: true,
            enabledSeries: [0],
            top: -2,
            left: 2,
            blur: 5,
            opacity: 0.06
          }
        },
        colors: ["#00E396", "#00E396"],
        stroke: {
          curve: "smooth",
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        series: [{ name: this.dataSerie.name, data: this.dataSerie.data }],
        markers: {
          size: 0,
          strokeColor: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          fillOpacity: 1,
          hover: {
            size: 6
          }
        },
        xaxis: {
          categories: this.labels,
          //   type: "datetime",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            offsetX: 24,
            offsetY: -5
          },
          tooltip: {
            enabled: true
          }
        },
        grid: {
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        fill: {
          type: "solid",
          fillOpacity: 0.7
        }
      }
    };
  },
  watch: {
    dataSerie() {
      this.options = {
        ...this.options,
        ...{
          series: [{ name: this.dataSerie.name, data: this.dataSerie.data }],
          xaxis: {
            categories: this.labels
          }
        }
      };
    }
  }
};
</script>

<style scoped>
</style>
