import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: []
  },

  mutations: {
    storeSearchMedia(state, media) {
      state.result = media;
    }
  },

  actions: {},
  modules: {}
});
