<template>
  <div>

    <v-card class="">  

      <select-card :selectItems="selectItems"/>

      <v-card
        id="rangeCard"
        flat
        class="text-uppercase d-inline-flex "
      >
        <v-row
          class="mx-2"
        >
          <v-text-field
            class="text-uppercase"
            placeholder="FROM"
            v-model="graphRange.from"
            color="primary"
          />

          <v-text-field
            class="text-upercase"
            placeholder="TO"
            v-model="graphRange.to"
            color="primary"
          />

          <v-radio-group
            row
            v-model="graphRange"
            v-on:change="eventBus.$emit('getChartRange', graphRange)"
          >

            <v-radio
              label="WEEK"
              color="secondary"
              value="weekly"
              selected
            />

            <v-radio
              label="MONTH"
              color="secondary"
              value='monthly'
            />

            <v-radio
              label="YEAR"
              color="secondary"
              value="yearly"
            />
            

          </v-radio-group>

        
        </v-row>
      </v-card>

      <e-chart
        id="echart"
        :autoresize="true"
        :options="chartOptions"
      />

      <v-btn color="primary" text @click="toggleType('line')">Line</v-btn>
      <v-btn color="primary" text @click="toggleType('bar')">Bar</v-btn>
      
    </v-card>

  </div>

</template>

<script>
import SelectCard from '../components/SelectCard.vue';
import { eventBus } from '../main'

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
    selectItems: Array,
    chartOptions: {},
  },

  components: {
    'select-card': SelectCard,
    'e-chart': ECharts,
  },

  data() {
    return {

      eventBus: eventBus,

      graphRange: 'weekly',
      
      graphDates: {
        from: '',
        to: ''
      },

    };
  },


  computed: {
    
    options: function() {
      return this.chartOptions
    }
  },

  methods: {

    toggleType: function(chartType) {
       this.options.series.forEach(element => {
         element.type = chartType
       });
    },
  },
};
</script>

<style>

.echarts {
    width: 100%;
    height: 500px; /* or e.g. 400px */
}

</style>