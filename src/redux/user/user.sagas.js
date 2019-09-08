import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  userActionTypes,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "./user.actions";
import {
  googleProvider,
  auth,
  createUserProfileDoc,
  getCurrentUser
} from "../../firebase/firebase.utils";

/*** SIGN IN GENERATOR FUNCTION ***/
function* signIn(user) {
  try {
    const userRef = yield call(createUserProfileDoc, user);

    const userSnapshot = yield userRef.get();

    // .put() things back to redux flow
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/*** SIGN IN WITH GOOGLE SAGA ***/
export function* signInWithGoogleStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAsync);
}

function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/*** SIGN IN WITH EMAIL SAGA ***/
export function* signInWithEmailStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAsync);
}

function* signInWithEmailAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/*** CHECK USER SESSION SAGA ***/
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield signIn(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* checkUserSessionStart() {
  yield takeLatest(userActionTypes.USER_SESSION_START, isUserAuthenticated);
}

/*** SIGN OUT SAGA ***/
function* signOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutAsync);
}

/*** ROOT USER SAGA ***/
export function* userSagas() {
  yield all([
    call(signInWithGoogleStart),
    call(signInWithEmailStart),
    call(checkUserSessionStart),
    call(signOutStart)
  ]);
}
