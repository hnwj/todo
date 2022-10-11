import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: [],
    // 文本框的内容
    inputValue: 'aa'
  },
  getters: {
  },
  mutations: {
    initList (state, list) {
      state.list = list
    },
    // 为store中的inputValue赋值
    setInputValue (state, val) {
      state.inputValue = val
    },
    // 添加事项
    

  },
  actions: {
    getList (context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(data)
        context.commit('initList', data)
      })
    }
  },
  modules: {
  }
})
