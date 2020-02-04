import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import store from './store';


//axios.defaults.withCredentials = true

const db = 'http://oskar.bbai.se/API/';

export default {


  login: async (user) => {

    const request = {
      method: 'POST',
      url: db + 'login.php',
      headers: {

        // // REMOVE THIS LATER
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: user.username,
        password: user.password,
      },
      withCredentials: 'true',
    }

    return axios(request).then( (response) => {
      console.log(response)
      
      if(response.status == 200) {
        return true
      }
      else 
        return false
      
    }).catch( (error) => {
      console.log('Login error: ' + error)
      return false
    })
  },

  logout: async () => {

    const request = {
      method: 'GET',
      url: db + 'logout.php',
    }

    axios(request).then( (response) => {
      console.log(response)
    }).catch( (error) => {
      console.log('Error when logging out: ' + error)
    })

  },
  
  getPredData: async (source, range = '') => {
    
    var conn =  db + 'get_'+ source.toLowerCase() +'.php'

    if(range != '' || range != 'weekly')
      conn += '?periodicity='+ range

    const request = {
      method: 'GET',
      url: conn,
      headers: {

      },

      withCredentials: 'true',
    }

    return axios(request).then( (response) => {

      if(response.status == 200) {
        return response.data
      } else 
        return false
      
    }).catch( (error) => {
      console.log(error)
      return false
    })
  },

}