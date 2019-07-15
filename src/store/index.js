import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
const state = {
  title: '',
  token: null
}
const mutations = {
  [types.LOGIN]: (state, data) => {
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store
