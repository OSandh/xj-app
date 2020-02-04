<template>
  <div>

    <v-card class="">

      <v-row class="mx-auto">
        <select-card :eventName="storeSelectionEvent" :selectItems="storeItems"/>
        <select-card :eventName="dataTypeSelectionEvent" :selectItems="chartDataTypes"/>
      </v-row>


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
            v-on:change="getChartRange(graphRange)"
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
import api from "../api.js";
import EChartOptions from './EChartOptions'

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

  },

  components: {
    'select-card': SelectCard,
    'e-chart': ECharts,
  },

  data() {
    return {

      eventBus: eventBus,

      storeSelectionEvent: 'storeSelectionEvent',
      dataTypeSelectionEvent: 'chartTypeEvent',

      graphRange: 'weekly',
      
      graphDates: {
        from: '',
        to: ''
      },

      currentChartType: "sales",

      currentRange: "weekly",

      totalSales: 0,

      totalVisitors: 0,

      chartData: [],

      /**
       * Default serie, every other chart object (lines) is based on this
       */
      defaultChartSerie: {
        name: "",
        data: [],

        type: "line",
        smooth: true,
        lineStyle: {
          width: 3
        },
        symbolSize: 12
      },

      realDataSerie: {},
      predictionSerie: {},

      chartOptions: EChartOptions.getOptions(),

    };
  },


  computed: {
    storeItems() {
      var items = ["All Stores"];
      this.$store.getters["user/user"].storeList.forEach(element => {
        items.push(element.name);
      });
      return items;
    },

    chartDataTypes() {
      var items = [];
      this.$store.getters["user/user"].dataTypes.forEach(element => {
        items.push(element);
      });
      return items;
    },
  },

  methods: {
    async getRawData(chartType, range = '') {
      
      // Collect prediction data from db
      var rawData = []
      var response = api.getPredData(chartType, range);

      return response.then(data => {
        if (data) {
          // variable to collect visitor or sales data
          var elementType = 0;


          if(chartType.toLowerCase() == 'sales')
            this.totalSales = 0
          if(chartType.toLowerCase() == 'visitors')
            this.totalVisitors = 0
          

          data.forEach(element => {
            // Get the data for visitors if this is the type requested
            if (chartType.toLowerCase() == "visitors") {
              elementType = element.visitors;
              this.totalVisitors += elementType;
            }

            // Or else get the sales data
            else if (chartType.toLowerCase() == "sales") {
              elementType = element.sales;
              this.totalSales += elementType;
            }

            rawData.push([
              element.date,
              elementType,
              element.prediction
            ]);
          });

          return rawData

        } else {
          this.$store.commit("user/clearAuth");
          api.logout();
          this.$router.push("/logout");
        }
      });
    },

    setChartData(chartType, range = '') {

      this.getRawData(chartType, range).then( dataset => {

        //this.chartData = Object.assign({}, dataset)

        // clear
        this.chartOptions.series = [];

        this.chartOptions.title.text = this.currentChartType.toUpperCase();

        var xAxis = [];
        var vData = [];
        var pData = [];

        dataset.forEach(element => {
          xAxis.push(element[0]);
          vData.push(element[1]);
          pData.push(element[2]);
        });

        this.chartOptions.xAxis.data = xAxis;

        // real value line
        this.realDataSerie.name = this.currentChartType.toUpperCase();
        this.realDataSerie.data = vData;
        this.chartOptions.series.push(this.realDataSerie);

        // prediction line
        this.predictionSerie.name = "PREDICTION";
        this.predictionSerie.data = pData;
        this.chartOptions.series.push(this.predictionSerie);
        
      })
    },

    getChartRange(range) {
      if(this.currentChartType.toLowerCase() == 'visitors')
        this.getRawData('sales', range);
      else 
        this.getRawData('visitors', range);

      this.setChartData(this.currentChartType, range);
    },

    toggleType: function(chartType) {
      this.chartOptions.series.forEach(element => {
        element.type = chartType
      });
    },
  },

  mounted() {
    // Set up the series from default template
    this.realDataSerie = Object.assign({}, this.defaultChartSerie);
    this.predictionSerie = Object.assign({}, this.defaultChartSerie);

    // initial data collect
    this.getRawData('Visitors', this.currentRange).then( data => {
      //this.chartData = data
    })
    
    this.setChartData('Sales', this.currentRange)
    
  },

  created() {
    // Event for store selection
    eventBus.$on(this.storeSelectionEvent, data => {
      console.log(data)
    })

    // Event for type of prediction data selection
    eventBus.$on(this.dataTypeSelectionEvent, data => {
      this.setChartData(data);
      this.currentChartType = data;
    });
  }
};
</script>

<style>

.echarts {
    width: 100%;
    height: 500px; /* or e.g. 400px */
}

</style>