<template>
  <v-card
    width="240"
    flat
    class="text-uppercase"
  >
    <v-select
      id="selectMenu"
      class="ml-2 mr-2"
      width="150"
      :items="selectItems"
      v-model="firstItem"
      v-on:change="selectionChanged"
      color="primary"
    />

  </v-card>
</template>

<script>
import { eventBus } from '../main'
export default {

  props: {
    eventName: String,
    selectItems: Array
  },

  data() {
    return {
      firstItem: this.selectItems[0],
      selectedItem: {}
    }
  },

  methods: {
    selectionChanged(item) {
      eventBus.$emit(this.eventName, item)
      this.selectedItem = item
    }
  },

}
</script>

<style>

</style>