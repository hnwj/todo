import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: [],
    // 文本框的内容
    inputValue: 'aa',
    // 下一个事项id
    nextId: 5
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
    addItem (state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    // 更具id，删除事项
    removeItem (state, id) {
      // 查id
      const i = state.list.findIndex(x => x.id === id)
      // 根据索引，删除对应的事项
      if (i !== -1) {
        state.list.splice(i, 1)
      }
    },
    // 修改事项的status
    changeStatus (state, params) {
      const i = state.list.findIndex((x) => x.id === params.id)
      if (i !== -1) {
        state.list[i].done = params.status
      }
    }

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
  },
  gett: {
    // 统计未完成的事项
    unDoneLength (state) {
      return state.list.filter(x => x.done === false).length
    }
  }
})
