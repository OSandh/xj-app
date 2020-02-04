<template>
  <v-content>

      <v-app-bar 
        app
        color="white"
      >
        <v-app-bar-nav-icon 
          class="d-lg-none"
          @click="toggleMenu"
          
        />
        
        <v-toolbar-title>
          <v-icon left color="secondary">{{ icon }}</v-icon>
          <span class="info--text">{{ title }}</span>
          <span class="text-uppercase info--text font-weight-bold">
            {{ subTitle }}
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer> 
        
        <user-menu/>
        
      </v-app-bar>

      <v-navigation-drawer 
        v-model="drawer"
        app 
        class="primary"
        width="210"
      >
        <side-menu/>
      </v-navigation-drawer>


    <router-view></router-view>
    
  </v-content>
</template>

<script>
import Sidemenu from '../components/Sidemenu.vue';
import Usermenu from '../components/Usermenu.vue';
import { eventBus } from '../main'
import api from '../api'

export default {
  name: 'home',

  data() {
    return {
      drawer: true,
      icon: 'bar_chart',
      title: 'Store overview',
      subTitle: 'All stores',
    }
  },

  components: {
    'side-menu': Sidemenu,
    'user-menu': Usermenu,
  },

  methods: {
    toggleMenu: function() {
      //this.$store.commit('showSideMenu')
      this.drawer = !this.drawer;
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters['user/isAuthenticated'];
    }
  },

  created() {
    // Hide sidemenu if screen is small
    var screenSize = this.$vuetify.breakpoint.name
    if(screenSize == 'xs' || screenSize == 'sm' || screenSize == 'md')
      this.drawer = false
      /**
     * Event for navigation to different page
     */
    eventBus.$on('gotoRoute', (data) => {
      this.icon = data.icon;
      this.title = data.title + ':';

      // Clear auth value if logging out
      if(data.route == '/logout') {
        this.$store.commit('user/clearAuth')
        api.logout()
      }

      this.$router.push(data.route);
    })
  },

  beforeUpdate() {

  }

}
</script>

<style>

</style>