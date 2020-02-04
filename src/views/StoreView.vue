<template>
  <div class="ma-5">
    
    <store-chart 
      ref="storeChart"
    ></store-chart>

    <v-row>

      <v-col 
        v-for="values in cardValues"
        :key="values.name"
        cols="12" xl="3" lg="3" md="6" sm="6"
      >
        <info-card 
          :title="values.name" 
          :cardVal="values.val" 
          :cardSecVal="values.secVal" />
      </v-col>


    </v-row>
  </div>
</template>

<script>
import InfoCard from "../components/InfoCard.vue";
//import api from "../api.js";
import { eventBus } from "../main";

import StoreChart from '../components/StoreChart.vue'

export default {
  name: "StoreView",

  components: {
    //'echart-card': EChartCard,
    'store-chart': StoreChart,
    "info-card": InfoCard
  },

  data() {
    return {
      isMounted: false,

      currentChartType: "sales",

      currentRange: "weekly",
      
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

    // just a test
    shortItems() {
      return this.$store.getters.shortItems;
    },

    chartTypes() {
      var items = [];
      this.$store.getters["user/user"].dataTypes.forEach(element => {
        items.push(element);
      });
      return items;
    },

    totalSales() {
      if(!this.isMounted)
        return 0

      return this.$refs.storeChart.totalSales
    },

    totalVisitors() {
      if(!this.isMounted)
        return 0

      return this.$refs.storeChart.totalVisitors
    },
    
    cardValues() {
      return [
        { name: 'Sales', val: this.totalSales, secVal: 'SEK'},
        { name: 'Visitors', val: this.totalVisitors, secVal: ''},
        { name: 'Pred. Accur.', val: 80, secVal: '%'},
        { name: 'Marketing Effect', val: 80, secVal: '%'},
      ]
    }, 

  },

  methods: {

  },

  mounted() {
    this.isMounted = true
  
  },

  created() {

  }
};
</script>

<style>
</style>