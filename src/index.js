import Vue from 'vue'
import App from './App.vue'
import '../assets/app.css'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8070/',
  vuex: {
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: { path: '/' } // Optional options
}))
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
