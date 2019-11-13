<template>
  <nav>
    <v-app-bar 
      app 
      dark 
      color="indigo"
      flat
    >
      xj-app
      <router-link to="/dashboard">
        <v-btn dark class="indigo darken-3">
          <v-icon left>home</v-icon>
          <span>Home</span>
        </v-btn>
      </router-link>
      
      <router-link to="/test">
        <v-btn dark class="indigo darken-3">
          Testing
        </v-btn>
      </router-link>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'header',

  data() {
    return{
      title: 'Nothing'
    }
  }
}
</script>

<style>

</style>