import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ampTree: []
  },
  mutations: {
    addToTree (state, payload) {
      state.ampTree.push(payload)
    }
  },
  actions: {

  }
})
