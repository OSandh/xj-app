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
      
      <usermenu/>
      
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" 
      app 
      class="blue-grey darken-3"
      width="210"
    >
      <sidemenu/>
    </v-navigation-drawer>

  </div>
</template>

<script>
import sidemenu from './Sidemenu.vue';
import usermenu from './Usermenu.vue';
import { eventBus } from '../main';

export default {
  name: 'Headerbar',

  props: {

  },

  components: {
    sidemenu,
    usermenu,
  },

  data() {
    return{
      drawer: true,
      icon: 'bar_chart',
      title: 'Store overview',
      subTitle: 'All stores',
    }
  },

  methods: {
    
    gotoRoute: function(item) {
      console.log(item);
      eventBus.$emit('changeHeaderTitle', item);
      this.$router.push(item.route);
    },
  },

  created() {
    /**
     * Event for navigation to different page
     */
    eventBus.$on('gotoRoute', (data) => {
      this.icon = data.icon;
      this.title = data.title + ':';
      this.$router.push(data.route);
    })
  }
}
</script>

<style>

</style>