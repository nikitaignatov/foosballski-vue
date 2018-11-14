import Vue from 'vue'
import Vuex from 'vuex'
import G from './plugins/guid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {},
    time: '00:00',
    id: null,
    game: [],
    isPlaying: false,
    players: ['---', '---', '---', '---']
  },
  mutations: {
    api(state, api) {
      state.api = api
    },
    update(state, data) {
      state.game = data
    },
    start(state, data) {
      state.isPlaying = true
      state.id = data
      state.game = []
    },
    end(state, data) {
      state.isPlaying = false
      state.id = null
      state.game = []
    },
    time(state, data) {
      state.time = data
    },
    players(state, data) {
      state.players = data
    },
    change_id(state, data) {
      state.id = data
      state.isPlaying = true
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
    },
    start({
      state,
      commit
    }) {
      console.debug('start')
      const id = G.guid()
      commit('start', id)
      state.api.server.execute(id, JSON.stringify({
        'Case': 'NewGame',
        'Fields': [id]
      }))
    },
    end({
      state,
      commit
    }) {
      const id = state.id
      console.debug('end', id)
      commit('end', id)
      state.api.server.execute(id, JSON.stringify({
        'Case': 'EndGame',
        'Fields': []
      }))
    }
  }
})