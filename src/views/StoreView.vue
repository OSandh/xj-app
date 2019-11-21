<template>
  <v-container>

    <selectcard :selectItems="storeItems"/>

    <chartcard/>

    <infocard :cardTitle="'Sales'"/>

  </v-container>

</template>

<script>
import selectcard from '../components/SelectCard.vue';
import chartcard from '../components/ChartCard.vue';
import infocard from '../components/InfoCard.vue';
import api from '../api.js';

export default {
  name: 'StoreView',

  components: {
    selectcard,
    chartcard,
    infocard,

  },

  data: () => {
    return {

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
    }
  },
  created() {
    // var db = 'http://13.53.97.92/oskar/';
    // console.log(db + 'get_visitors.php');
    // var conn = 'http://13.53.97.92/oskar/get_visitors.php';
    // this.axios.get(conn).then( (response) => {
    //   console.log(response);
    // }).catch(function(error){
    //   console.log(error);
    // })

    

    
    api.getVisitors();
  }
}
</script>

<style>

</style>