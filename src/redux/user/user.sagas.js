import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes, signInSuccess, signInFailure } from "./user.actions";
import {
  googleProvider,
  auth,
  createUserProfileDoc
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

/*** ROOT USER SAGA ***/
export function* userSagas() {
  yield all([call(signInWithGoogleStart), call(signInWithEmailStart)]);
}
