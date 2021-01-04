import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_STATUS = 'SET_STATUS'

const store = new Vuex.Store({
  state: {
    status: 0
  },
  mutations: {
    [SET_STATUS] (state, data) {
      state.status = data
    }
  }
})

export default store
