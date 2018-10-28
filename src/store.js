import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: '00:00',
    game: [],
    players:['---','---','---','---']
  },
  mutations: {
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
    }
  }
})