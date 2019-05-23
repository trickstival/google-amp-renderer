import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastAmpChunk: [],
    ampTree: []
  },
  mutations: {
    addAmpElements (state, payload) {
      const arraified = Array.isArray(payload) ? payload : [payload]
      state.ampTree.push(arraified)
      state.lastAmpChunk = arraified
    }
  },
  actions: {

  }
})
