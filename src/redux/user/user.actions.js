export const userActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  GOOGLE_SIGN_IN_SUCCESS: "GOOGLE_SIGN_IN_SUCCESS",
  GOOGLE_SIGN_IN_FAILURE: "GOOGLE_SIGN_IN_FAILURE",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  EMAIL_SIGN_IN_SUCCESS: "EMAIL_SIGN_IN_SUCCESS",
  EMAIL_SIGN_IN_FAILURE: "EMAIL_SIGN_IN_FAILURE"
};

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

/*** GOOGLE SIGN IN ACTIONS ***/
export const signInWithGoogleStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const signInWithGoogleSuccess = user => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const signInWithGoogleFailure = error => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

/*** EMAIL SIGN IN ACTIONS ***/
export const signInWithEmailStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInWithEmailSuccess = user => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const signInWithEmailFailure = error => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
