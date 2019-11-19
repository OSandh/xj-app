<template>
  <v-card
    class="ma-5"
    elevation="3"
  >

    <GChart
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

  components: {
    GChart
  },

  data: () => {
    return {
      chartData: [
        ['Day', 'Actual', 'Prediction', 'Budget'],
        ['1', 1000, 950, 900],
        ['2', 1170, 1100, 1000],
        ['3', 660, 660, 610],
        ['4', 900, 1000, 950]
      ],

      chartOptions: {
          title: '',
          curveType: 'function',

          height: 400,

          pointsVisible: true,

          hAxis: {
            textPosition: 'none'
          },
          vAxis: {
            ticks: [400, 600, 800, 1000, 1200, 1400],
            textPosition: 'none',
          },

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
            width: '95%',
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