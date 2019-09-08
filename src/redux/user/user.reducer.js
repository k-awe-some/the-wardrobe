import { userActionTypes } from "./user.actions";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.USER_SESSION_START:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    default:
      return state;
  }
};

export default userReducer;
