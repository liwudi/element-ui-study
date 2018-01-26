/**
 * Created by mapbar_front on 2018/1/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  state: {
    userInfo: window.localStorage.getItem('userInfo') || {},
    acount: 0
  },
  mutations: {
    ADD(state,aa){
      state.acount++;
    },
    DEC(state,aa){
      state.acount--;
    }
  }
};

export default store;
