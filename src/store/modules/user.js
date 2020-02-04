const state = {
  user: {
    name: 'Dormy',
    dataTypes: ['Sales', 'Visitors'],
    storeList: [
      {
        name: 'Örebro',
        adress: '123 Fake Street' 
      },
      {
        name: 'Stockholm',
        adress: '456 Fake Street' 
      },
      {
        name: 'Göteborg',
        adress: '789 Fake Street' 
      }
    ]
  },

  isAuthenticated: false,
}

const getters = {
  shortItems: state => {
    var shortItems = state.user.storeList.map( item => {
      return {
        name: item.name + 'GG',
        adress: item.adress
      }
    })
    return shortItems
  },

  user: state => {
    return state.user
  },

  isAuthenticated: state => {
    return state.isAuthenticated
  }
}

const mutations = {
  setAuth: state => {
    state.isAuthenticated = true;
    localStorage.setItem('isAuthed', JSON.stringify(state.isAuthenticated))
  },
  clearAuth: state => {
    state.isAuthenticated = false;
    localStorage.removeItem('isAuthed')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}