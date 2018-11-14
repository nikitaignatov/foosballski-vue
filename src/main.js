import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
try {
  $.connection.hub.url = 'http://localhost:8070/signalr'
  var hub = $.connection.foosball
  hub.client.publish = function (message) {
    console.log('publish', message)

    const data = message
    if (JSON.stringify(data) !== JSON.stringify(store.state.game)) {
      console.log(data)
      if (data.Case === 'New')
        store.commit('change_id', data.Fields[0])
    }
  }
  hub.client.time = function (message) {
    store.commit('time', JSON.parse(message))
  }
  hub.client.players = function (message) {
    const data = JSON.parse(message)
    if (JSON.stringify(data) !== JSON.stringify(store.state.players)) {
      console.log(data)
      store.commit('players', data)
    }
  }

  $.connection.hub.disconnected(function () {
    setTimeout(function () {
      $.connection.hub.start()
    }, 3000)
  })
  $.connection.hub.start()
    .done(function () {
      store.commit('api', hub)
      hub.server.execute('start')
    })
} catch (e) {
  console.error(e)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')