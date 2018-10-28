import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

$.connection.hub.url = 'http://localhost:8070/signalr'
var hub = $.connection.foosball
hub.client.publish = function (message) {
  var json = JSON.stringify(message, null, 2)
  const data = JSON.parse(message)
  console.log(data)
  store.commit('update', data)
}
hub.client.time = function (message) {
  console.log(message)
  store.commit('time',JSON.parse( message))
}
hub.client.players = function (message) {
  console.log(message)
  store.commit('players',JSON.parse( message))
}

$.connection.hub.disconnected(function () {
  setTimeout(function () {
    $.connection.hub.start()
  }, 3000)
})
$.connection.hub.start()
  .done(function () {
    hub.server.command('start')
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
