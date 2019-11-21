import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    user,
  },

  state: {

    headerSubTitle: '',
    showSideMenu: true,
  },

  getters: {
    showSideMenu: state => {
      return state.showSideMenu
    }
  },

  mutations: {
    showSideMenu(state) {
      state.showSideMenu = !state.showSideMenu
    },
  },

  actions: {
    
  }

})