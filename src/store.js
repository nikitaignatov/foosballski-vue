import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {},
    time: '00:00',
    game: [],
    players: ['---', '---', '---', '---']
  },
  mutations: {
    api(state, api) {
      state.api = api
    },
    update(state, data) {
      state.game = data
    },
    time(state, data) {
      state.time = data
    },
    players(state, data) {
      state.players = data
    }
  },
  actions: {
    update({
      commit
    }, data) {
      commit('update', data)
    },
    swap({
      state
    }, team) {
      console.log('swap', team)
      state.api.server.execute(JSON.stringify({
        'Case': 'Swap',
        'Fields': [{
          'Case': team
        }]
      }))
    }
  }
})