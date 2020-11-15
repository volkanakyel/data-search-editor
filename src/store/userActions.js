import eventService from "@/services/eventService.js";
export default {
  fetchUsers({ commit }) {
    return eventService
      .getUsers()
      .then((response) => {
        //copy of the array before commit
        const users = [...response.data];
        //commit to set_users mutation
        commit("SET_USERS", users);
      })
      .catch((error) => console.log(error));
  },
  editUser({ commit }, updatedUser) {
    //commit a copy of the object
    commit("EDIT_USER", { ...updatedUser });
  },
};
