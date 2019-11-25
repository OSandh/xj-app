<template>
  <v-container>
     
    <h-bar id="headerbar"/>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-container>
</template>

<script>
import HBar from '../components/Headerbar'
import { eventBus } from '../main'
import api from '../api'

export default {
  name: 'home',

  data() {
    return {
      
    }
  },

  components: {
    'h-bar': HBar
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['user/isAuthenticated'];
    }
  },

  created() {
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
  }
}
</script>

<style>

</style>