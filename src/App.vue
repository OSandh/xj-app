<template>
  <v-app>
    
    <headerbar :hidden="!isAuthenticated" id="headerbar"/>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import headerbar from './components/Headerbar.vue'

export default {
  name: 'App',

  props: {
    
  },


  data: () => ({
    headerTitle: 'Nothing',
    user: {
      name: 'Dormy Örebro',

    }
  }),

  components: { 
    headerbar,
  },

  methods: {
    
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters['user/isAuthenticated'];
    }
  }
};
</script>
