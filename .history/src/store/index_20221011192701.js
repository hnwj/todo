import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: []
  },
  getters: {
  },
  mutations: {
    initi
  },
  actions: {
    getList (context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(data)
      })
    }
  },
  modules: {
  }
})
