export default {
  SET_USERS(state, users) {
    state.users = users;
  },
  EDIT_USER(state, updatedUser) {
    //Retrieving the index of the user we want update
    const index = state.users.findIndex((user) => user._id == updatedUser._id);
    //replace the correct index with splice method
    state.users.splice(index, 1, { ...updatedUser });
  },
};
