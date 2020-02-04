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
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="userinfo.username"
            label="Username"
            :rules="formRules"
            required
          />
          <v-text-field
            v-model="userinfo.password"
            label="Password"
            :rules="formRules"
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
      valid: true,

      authValid: true,

      userinfo: {
        username: 'oskar',
        password: 'losenord',
      }
      

    }
  },

  computed: {
    formRules() {
      const rules = [
        v => v.length != 0 || 'Required',
        this.authValid || 'username/password not valid'
      ]

      return rules
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
          this.authValid = true
          this.$store.commit('user/setAuth')
          this.$router.push('/')
          console.log('success')
        } else {
          console.log('login failed')
          this.authValid = false
        }
          
      })
    }
  },
  

}
</script>

<style>

</style>