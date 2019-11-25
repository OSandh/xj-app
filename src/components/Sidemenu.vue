<template>
  
  <div>
    <v-img 
      class="mx-auto ma-4"
      height="100px"
      :src="getLogo()">
    </v-img>
      
    <v-list
      dense
      class="white--text"
    >
      <v-list-item-group 
        
      >
        <v-list-item 
          class="py-2 body-2"
          v-for="item in menuItems" :key="item.title"
          @click="eventBus.$emit('gotoRoute', item)"
          v-slot:default="{ active }"
          active-class="blue-grey darken-3"
        >

          <div v-if="!active"
            class="pr-2"  
          >
            <v-icon color="white">{{ item.icon }}</v-icon>
          </div>

          <div v-if="active"
            class="pr-2"
          >
            <v-icon color="red darken-4">{{ item.icon }}</v-icon>
          </div>

          <v-list-item-content 
            class="px-3 white--text"
          >
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>

      </v-list-item-group>

    </v-list>
  </div>



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
          route: '/store'
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
    },
  },

  computed: {
    showSideMenu(){
      return this.$store.getters['showSideMenu'];
    }
  }
}
</script>

<style>

</style>