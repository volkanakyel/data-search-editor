export default {
  SET_USERS(state, users) {
    state.users = users;
  },
  EDIT_USER(state, updatedUser) {
    //Splice method and ... Operator on copying object
    const index = state.users.findIndex((user) => user._id == updatedUser._id);
    state.users.splice(index, 1, { ...updatedUser });
  },
  DELETE_USER(state, userId) {
    const index = state.users.findIndex((user) => user._id == userId);
    state.users.splice(index, 1);
  },
};
