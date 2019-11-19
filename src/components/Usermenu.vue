<template>

  <div class="text-center">
    <v-menu 
      offset-y
      transition="slide-y-transition"
      flat
      :nudge-width="200"
      :close-on-content-click="true"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          x-small depressed
          dark
          color="blue-grey darken-3"
          fab v-on="on"
        >
          <v-icon>person</v-icon>
        </v-btn>
        
      </template>

      <!-- Usermenu that is opened -->
      <v-card 
        flat
      >
        <v-list>

          <v-list-item
             @click="this.$router.push('/profile')"
          >

            <v-list-item-avatar>
              <v-icon large>person</v-icon>
            </v-list-item-avatar>

            <v-list-item-title>
              {{ user.name }}
              <v-list-item-subtitle class="grey--text">
                View profile
              </v-list-item-subtitle>
            </v-list-item-title>


            
          </v-list-item>

        </v-list>

        <v-divider/>

        <v-list >
          <v-list-item-group 
            dense
            active-class="blue-grey lighten-4"
          >

            <v-list-item 
              v-for="item in menuItems" 
              :key="item.title"
              @click="eventBus.$emit('gotoRoute', item)"
            >

              <v-icon small left>
                {{ item.icon }}
              </v-icon>

              <v-list-item-content>
                {{ item.title }}
              </v-list-item-content>

            </v-list-item>

          </v-list-item-group>
        </v-list>
      


      </v-card>

    </v-menu>
  </div>



</template>

<script>
import { eventBus } from '../main';

export default {
  data() {
    return {
      eventBus: eventBus,

      user: {},

      menuItems: [
        {
          title: 'Settings',
          icon: 'build',
          route: '/settings'
        },
        {
          title: 'Logout',
          icon: 'power_settings_new',
          route: '/dashboard'
        }
      ]
    }
  },

  methods: {
    
  },

  mounted(){
    console.log(this.$root.user.name);
    this.user = this.$root.user;
  }
}
</script>

<style>

</style>