<template>
  <v-card 
    class="ma-5"
    elevation="3" 
  >

    <v-card
      width="250"
      flat
      class="text-uppercase"
    >
      <v-select
        class="ml-2 mr-2"

        width="150"
        :items="selectItems"
        v-model="firstItem"
      />

    </v-card>

  </v-card>
</template>

<script>
export default {
  props: {
    selectItems: Array
  },

  data() {
    return {
      firstItem: this.selectItems[0],
    }
  }

}
</script>

<style>

</style>