import Vue from 'vue'
import Vuex from 'vuex'
import G from './plugins/guid'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
    ],
    api: {},
    game: {
      id: null,
      events: [],
      teams: {
        white: {
          defense: null,
          centerForward: null,
          goals: 0
        },
        black: {
          defense: null,
          centerForward: null,
          goals: 0
        }
      },
      time:{
        gameSeconds:0,
        sinceStartSeconds:0
      },
      timer: '00:00',
      status: 'Zero' // ErrorState,Zero,Pause,Playing,GoalRegistration
    }
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
    },
    assign_player(state, {team, position, player}) {
      console.log('asdasd',player)
      state.game.teams[team][position] = player
    }
  },
  actions: {
    assignPlayer({commit, state}, {team, position, id }) {
      let player = state.users.find(x => x.id === id)
      commit('assign_player', {team: team,position: position,player: player})
    },
    update({commit}, data) {
      commit('update', data)
    },
    swap({state}, team) {
      console.log('swap', team)
      state.api.server.execute(JSON.stringify({
        'Case': 'Swap',
        'Fields': [{
          'Case': team
        }]
      }))
    },
    start({state, commit}) {
      console.debug('start')
      const id = G.guid()
      commit('start', id)
      router.push('/game/' + id)
      state.api.server.execute(id, JSON.stringify({
        'Case': 'NewGame',
        'Fields': [id]
      }))
    },
    end({state, commit}) {
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
