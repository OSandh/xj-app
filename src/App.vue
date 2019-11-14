<template>
  <v-app>
    
    <Headerbar id="headerbar"/>
    

  
    <!-- <v-app-bar
      app
      color="indigo"
      dark
    >
      xj-app
      <router-link to="/dashboard">
        <v-btn class="indigo darken-3">
          <v-icon left>home</v-icon>
          <span>Home</span>
        </v-btn>
      </router-link>
      
      <router-link to="/test">
        <v-btn dark class="indigo darken-3">
          Testing
        
        </v-btn>
      </router-link>
    </v-app-bar> -->


    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Headerbar from './components/Headerbar.vue'

export default {
  name: 'App',

  props: {

  },


  data: () => ({
    headerTitle: 'Nothing',
  }),

  components: { 
    Headerbar,
  },

  methods: {
    
  }
};
</script>
