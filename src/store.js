import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: []
  },
  mutations: {
    update(state, data) {
      state.game = data
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