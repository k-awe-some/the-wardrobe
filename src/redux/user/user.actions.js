export const userActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
