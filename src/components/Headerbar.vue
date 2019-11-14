<template>
  <div>

    <v-app-bar 
      app
      color="white"
    >
      <v-app-bar-nav-icon 
        class="d-lg-none"
        @click="drawer = !drawer"
        
      />
      
      <v-toolbar-title>
        <v-icon left color="red">{{ icon }}</v-icon>
        <span class="grey--text">{{ title }}</span>
        <span class="text-uppercase">
          {{ subTitle }}
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="blue-grey darken-3">
      <Sidemenu/>
    </v-navigation-drawer>

  </div>
</template>

<script>
import Sidemenu from './Sidemenu.vue';
import { eventBus } from '../main';


export default {
  name: 'Headerbar',

  props: {

  },

  components: {
    Sidemenu,
  },

  data() {
    return{
      drawer: true,
      icon: 'bar_chart',
      title: 'Store overview',
      subTitle: 'All stores',
    }
  },
  created() {
    // Event listener for changing of headerbar title
    eventBus.$on('changeHeaderTitle', (data) => {
      this.icon = data.icon;
      this.title = data.title;
    })
  }
}
</script>

<style>

</style>