/*
 * @Author: Meicen
 * @Date: 2019-08-30 15:50:20
 * @LastEditors: Meicen
 * @LastEditTime: 2019-08-30 17:13:32
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
   setList(state,payload){
     state.list = payload
   }
  },
  actions: {
    getList({commit}){
      Axios.get('/list').then(res=>{
        commit('setList',res.data.data)
      })
    }
  }
})
