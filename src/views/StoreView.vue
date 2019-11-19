<template>
  <v-container>

    <selectcard :selectItems="selectItems"/>

    <chartcard/>

    <infocard :cardTitle="'Sales'"/>

  </v-container>

</template>

<script>
import selectcard from '../components/SelectCard.vue';
import chartcard from '../components/ChartCard.vue';
import infocard from '../components/InfoCard.vue';

export default {
  name: 'StoreView',

  components: {
    selectcard,
    chartcard,
    infocard,

  },

  data: () => {
    return {
      selectItems: [
        'All Stores',
        'This Store'
      ]
    }
  }
}
</script>

<style>

</style>