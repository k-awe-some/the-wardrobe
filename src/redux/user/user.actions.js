export const userActionTypes = {
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  USER_SESSION_START: "USER_SESSION_START"
};

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

/*** GOOGLE ***/
export const signInWithGoogleStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

/*** EMAIL ***/
export const signInWithEmailStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

/*** USER SESSION ***/
export const checkUserSessionStart = user => ({
  type: userActionTypes.USER_SESSION_START,
  payload: user
});

/*** SIGN IN SUCCESS | FAILURE ***/
export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});
