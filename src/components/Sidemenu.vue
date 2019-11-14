<template>
  <div>
    <v-card 
      class="mx-auto"
      color="transparent"
    >
      <v-img 
        class="mx-auto ma-4"
        height="200px"
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
            <v-list-item-content @click="gotoRoute(item)">
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-card>
    
  </div>
</template>

<script>
import { eventBus } from '../main'


export default {
  name: "Sidemenu",

  data: () => {
    return {
      logo: 'logo.svg',

      menuItems: [
        {
          title: 'Store overview',
          icon: 'bar_chart',
          route: '/'
        },
        {
          title: 'Online overview',
          icon: 'wifi',
          route: '/dashboard'
        },
        {
          title: 'Marketing',
          icon: 'group',
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
     * Navigate to different page
     * and fire event for title change in headerbar
     */
    gotoRoute: function(item) {
      eventBus.$emit('changeHeaderTitle', item);
      this.$router.push(item.route);
    },

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