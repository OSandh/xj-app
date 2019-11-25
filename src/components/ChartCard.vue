<template>
  <v-card
    class="ma-5"
    elevation="3"
  >

    <g-chart
      id="chart"
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
    />

    
  </v-card>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  name: 'chartcard',

  props: {
    rawData: Array
  },

  components: {
    'g-chart': GChart
  },

  computed: {
    chartData: function() {
      return this.rawData
    }
  },

  data() {
    return {

      chartOptions: {
          title: '',
          curveType: 'function',

          height: 400,

          pointsVisible: true,

          // hAxis: {
          //   textPosition: 'none'
          // },
          // vAxis: {
          //   ticks: [400, 600, 800, 1000, 1200, 1400],
          //   textPosition: 'none',
          // },

          crosshair: {
            trigger: 'both',
            orientation: 'vertical'
          },

          focusTarget: 'category',

          legend: { 
            textStyle: { fontName: 'Courier New'},
            position: 'top' 
          },

          colors: ['darkred','darkblue', 'darkgreen'],

          chartArea: {
            width: '80%',
            backgroundColor: {
              fill: 'lightgrey',
              fillOpacity: 0.1
            },
          },
      }
    };
  }
};
</script>

<style>
#chart{
  font-family: 'Courier New', Courier, monospace
}

</style>