<template>
  <v-container>
    <v-card 
      class="mx-auto"
      color="transparent"
      flat
    >
      <v-img 
        class="mx-auto ma-4"
        height="100px"
        :src="getLogo()">
      </v-img>
        
    </v-card>

    <v-card
      class="mx.auto"
      tile
      flat
      dark
      color="blue-grey darken-3"
    >
      <!-- <v-subheader class="white--text">Test menu</v-subheader> -->

      <v-list-item-group 
        class="white--text"
        dark
        active-class="blue-grey darken-4"
      >
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-content @click="eventBus.$emit('gotoRoute', item)">
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

    </v-card>
    
  </v-container>
</template>

<script>
import { eventBus } from '../main'


export default {
  name: "Sidemenu",

  data: () => {
    return {
      eventBus: eventBus,

      logo: 'logo.svg',

      menuItems: [
        {
          title: 'Store overview',
          icon: 'business',
          route: '/store'
        },
        {
          title: 'Online overview',
          icon: 'bar_chart',
          route: '/dashboard'
        },
        {
          title: 'Marketing',
          icon: 'device_hub',
          route: '/test'
        },
        {
          title: 'Scheduling',
          icon: 'schedule',
          route: '/'
        },
        {
          title: 'Trends',
          icon: 'trending_up',
          route: '/'
        },
        {
          title: 'Logistics',
          icon: 'local_shipping',
          route: '/'
        },
      ]
    }
  },
  methods: {
    /**
     * Get logo src
     */
    getLogo: function() {
      return require(`@/assets/${this.logo}`);
    }
  }
}
</script>

<style>

</style>