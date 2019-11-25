<template>
  <v-container>

    <select-card :selectItems="chartTypes"/>

    <echart-card :rawData="chartData" :chartOptions="eChartOptions"/>

    <chart-card :rawData="chartData"/>

    <info-card :cardTitle="'Sales'"/>

  </v-container>

</template>

<script>
import SelectCard from '../components/SelectCard.vue';
import ChartCard from '../components/ChartCard.vue';
import EChartCard from '../components/EChartCard.vue'
import InfoCard from '../components/InfoCard.vue';
import api from '../api.js';
import { eventBus } from '../main'

export default {
  name: 'StoreView',

  components: {
    'select-card': SelectCard,
    'chart-card': ChartCard,
    'echart-card': EChartCard,
    'info-card': InfoCard,

  },

  data() {
    return {
      chartData: [],
      visitorData: [
        ['date', 'visitors', 'prediction']
      ],
      salesData: [
        ['date', 'sales', 'prediction']
      ],

      eChartOptions: {
        title: {
            id: 'chartTitle',
            text: 'EChart Test',
          },

          legend: {},

          tooltip: {
            trigger: 'axis',
          },

          dataset: {
            source: {}
          },

          xAxis: {
            type: 'category',
            data: []
          },

          yAxis: {
            gridIndex: 0
          },

          grid: {

          },

          series: [
            
          ],

          toolbox: {
            feature: {
              saveAsImage: []
            }
          }


      }
    }
  },

  computed: {
    storeItems() {
      var items = ['All Stores'];
      this.$store.getters['user/user'].storeList.forEach(element => {
        items.push(element.name);
      });
      return items;
    },
    // just a test
    shortItems() {
      return this.$store.getters.shortItems;
    },

    chartTypes () {
      var items = []
      this.$store.getters['user/user'].dataTypes.forEach( element => {
        items.push(element)
      })
      return items
    }
  },
  mounted() {
    var visitorsResponse = api.getVisitors()
    visitorsResponse.then( (data) => {

      data.forEach((element) => {
        this.visitorData.push([element.date, element.visitors, element.prediction])
      })

      // TEMP
      this.visitorData.forEach( (element) => {
        this.chartData.push(element)
      })

      
     // this.eChartOptions.title.subtext = this.chartData[0][1]
      
      var xAxis = []
      var vData = []
      var pData = []
      this.visitorData.forEach(element => {
        if(element[0] != 'date'){
          console.log(element)
          xAxis.push(element[0])

          vData.push(element[1])

          pData.push(element[2])
        }
        
      });
      this.eChartOptions.xAxis.data = xAxis

      // Visitor line
      this.eChartOptions.series.push({
        name: 'Visitors', 
        type: 'bar',
        data: vData,
        smooth: true
      })
      
      // Prediction line
      this.eChartOptions.series.push({
        name: 'Prediction', 
        type: 'line',
        data: pData,
        smooth: true
      })
      

      
      
    })

    var salesResponse = api.getSales()
    salesResponse.then( (data) => {
      
      data.forEach((element) => {
        this.salesData.push([element.date, element.sales, element.prediction])
      })
    })
  },

  created() {
    eventBus.$on('selectionChanged', (data) => {
      
      console.log('changed to ' + data)
      

      if(data == 'Visitors') {
        this.chartData = []

        this.visitorData.forEach( (element) => {
          this.chartData.push(element)
        })

        console.log('Visitors filled')

      } else if(data == 'Sales'){
        this.chartData = []
        this.salesData.forEach( (element) => {
          this.chartData.push(element)
        })

        console.log('Sales filled')
      }

    })
  }
}
</script>

<style>

</style>