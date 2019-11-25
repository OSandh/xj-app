import axios from 'axios';
import store from './store';


const db = 'http://13.53.97.92/oskar/';

export default {

  login: async (user) => {

    const request = {
      method: 'POST',
      url: db + 'login.php',
      headers: {
        'Accept': 'application/json',

        // REMOVE THIS LATER
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: user.username,
        password: user.password,
      },
      //withCredentials: 'true',
    }

    return axios(request).then( (response) => {
      console.log(response)
      
      if(response.status == 200)
        return true
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
  
  getVisitors: async () => {
    
    const request = {
      method: 'GET',
      url: db + 'get_visitors.php',
      headers: {
       
      },

      withCredentials: 'true',
    }

    return axios(request).then( (response) => {
      console.log(response)
      return response.data
    }).catch( (error) => {
      console.log(error)
    })
  },

  getSales: async () => {
    
    const request = {
      method: 'GET',
      url: db + 'get_sales.php',
      headers: {
       
      },

      withCredentials: 'true',
    }

    return axios(request).then( (response) => {
      console.log(response)
      return response.data
    }).catch( (error) => {
      console.log(error)
    })
  }
}