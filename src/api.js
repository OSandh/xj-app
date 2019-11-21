import axios from 'axios';
import store from './store';


const db = 'http://13.53.97.92/oskar/';

export default {

  

  login: async (user) => {

    const options = {
      method: 'post',
      url: db + 'login.php',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: {
        username: user.username,
        password: user.password,
      }
    }
    return axios(options).then( (response) => {
      if(response.status == 200)
        return true
      else
        return false
    })
  },
  
  getVisitors: () => {
    axios.get(db + 'get_visitors.php').then( 
      (data) => {
        console.log(data);
    }).catch(
      (error) => {
        console.log(error.message);
      }
    )
  }
}