import axios from "axios";
// export const namespaced = true;
export default {
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    EDIT_USER(state, updatedUser) {
      //Splice method and ... Operator on copying object
      const index = state.users.findIndex(
        (user) => user._id == updatedUser._id
      );
      state.users.splice(index, 1, { ...updatedUser });
    },
    DELETE_USER(state, userId) {
      const index = state.users.findIndex((user) => user._id == userId);
      state.users.splice(index, 1);
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios({
        method: "get",
        url:
          "https://cors-anywhere.herokuapp.com/https://updates.suade.org/files/people.json",
        responseType: "json",
      })
        .then(function(response) {
          // console.log(response.data);
          commit("SET_USERS", response.data);
        })
        .catch((error) => console.log("Error is : " + error));
    },
    editUser({ commit }, updatedUser) {
      commit("EDIT_USER", updatedUser);
    },
    deleteUser({ commit }, userId) {
      commit("DELETE_USER", userId);
    },
  },
};
