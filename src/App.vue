<template>
  <v-app>

    
    <router-view></router-view>
   

  </v-app>
</template>

<script>

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
  },

  methods: {
    
  },
};
</script>
