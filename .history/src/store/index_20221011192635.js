import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    / 
    list: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getList () {
      axios.get('/list.json').then(({ data }) => {
        console.log(data)
      })
    }
  },
  modules: {
  }
})
