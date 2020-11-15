import Vue from "vue";
import Vuex from "vuex";
import userActions from "./userActions";
import userMutations from "./userMutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: userMutations,
  actions: userActions,
});
