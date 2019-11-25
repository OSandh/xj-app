<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto"
        width="400"
      >
        <v-card-title>Login</v-card-title>
        <v-form 
          class="ma-5"
          ref="form"
        >
          <v-text-field
            v-model="userinfo.username"
            label="Username"
            required
          />
          <v-text-field
            v-model="userinfo.password"
            label="Password"
            required
            type="password"
          />
          
          <v-btn 
            class="ma-5"
            @click="submit"
          >
            Submit
          </v-btn>

        </v-form>
      </v-card>
    </v-container>
    
  </div> 
</template>

<script>
import api from '../api'

export default {
  data: () => {
    return {
      userinfo: {
        username: 'oskar',
        password: 'losenord',
      }
      

    }
  },

  mounted() {
    if(localStorage.getItem('isAuthed')) {
      this.$store.commit('user/setAuth')
      this.$router.push('/')
    }
  },

  methods: {
    submit() {
      var response = api.login(this.userinfo)

      response.then((success) => {
        console.log(success)
        if(success) {
          console.log('success')
          this.$store.commit('user/setAuth')
          this.$router.push('/')
        } else {
          console.log('login failed')
        }
          
      })
    }
  },
  

}
</script>

<style>

</style>