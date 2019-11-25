<template>
  <div>

    <v-app-bar 
      app
      color="white"
    >
      <v-app-bar-nav-icon 
        class="d-lg-none"
        @click="toggleMenu"
        
      />
      
      <v-toolbar-title>
        <v-icon left color="red darken-4">{{ icon }}</v-icon>
        <span class="grey--text">{{ title }}</span>
        <span class="text-uppercase">
          {{ subTitle }}
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer> 
      
      <user-menu/>
      
    </v-app-bar>

  <v-navigation-drawer 
    v-model="drawer"
    app 
    class="blue-grey darken-3"
    width="210"
  >
    <side-menu/>
  </v-navigation-drawer>

  </div>
</template>

<script>
import Sidemenu from './Sidemenu.vue';
import Usermenu from './Usermenu.vue';
import { eventBus } from '../main';
import { api } from '../api.js';

export default {
  name: 'Headerbar',

  props: {

  },

  components: {
    'side-menu': Sidemenu,
    'user-menu': Usermenu,
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
    toggleMenu: function() {
      //this.$store.commit('showSideMenu')
      this.drawer = !this.drawer;
    }
  },

  computed: {
    showSideMenu() {
      return this.$store.getters['showSideMenu'];
    }
  },

  created() {


  }
}
</script>

<style>

</style>