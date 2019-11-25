<template>
  <v-card
    class="ma-5"
    elevation="3"
  > 
    <v-btn text @click="toggleType('line')">Line</v-btn>
    <v-btn text @click="toggleType('bar')">Bar</v-btn>

    <e-chart 
      :autoresize="true"
      :options="chartOptions"
    />
    
  </v-card>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/axis'


export default {
  name: 'echartcard',

  props: {
    rawData: Array,
    chartOptions: {}
  },

  components: {
    'e-chart': ECharts
  },

  computed: {
    chartData: function() {
      return this.rawData
    },
    
    options: function() {
      return this.chartOptions
    }
  },

  data() {

    return {
 
    };
  },


  methods: {
    toggleType: function(chartType) {

       this.options.series.forEach(element => {
         element.type = chartType
         console.log(element)
       });

    } 
  },
};
</script>

<style>
#chart{
  font-family: 'Courier New', Courier, monospace
}
.echarts {
    width: 100%;
    height: 400px; /* or e.g. 400px */
}
</style>