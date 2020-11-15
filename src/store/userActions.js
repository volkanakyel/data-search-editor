import eventService from "@/services/eventService.js";
export default {
  fetchUsers({ commit }) {
    return eventService
      .getUsers()
      .then((response) => {
        const users = [...response.data];
        commit("SET_USERS", users);
      })
      .catch((error) => console.log(error));
  },
  editUser({ commit }, updatedUser) {
    commit("EDIT_USER", updatedUser);
  },
  deleteUser({ commit }, userId) {
    commit("DELETE_USER", userId);
  },
};
