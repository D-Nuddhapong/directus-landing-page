<template>
  <private-view title="My Custom Module">Page Content goes here update 2...
    <div class="grid grid-cols-4">
      <div class="col-span-2">
        <div class="bg-white">
          <h2 class="text-white">Test</h2>
          <VueApexCharts type="radialBar" height="350" :options="chartOptions" :series="series"></VueApexCharts>
        </div>
      </div>
    </div>
  </private-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  components: {
    VueApexCharts
  },
  setup() {
    return {
      series: [70],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Cricket']
      }
    }
  }
})
</script>
<style>

</style>
