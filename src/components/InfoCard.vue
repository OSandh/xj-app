<template>
  <v-card
    class="ma-5"
    elevation="3"
    max-width="300"
  >
    <v-card-title
      class=""
    >
      {{ cardTitle }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    data: []
  },
  data: () => {
    return {

    }
  }

}
</script>

<style>

</style>