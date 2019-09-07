import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  userActionTypes,
  signInWithGoogleSuccess,
  signInWithGoogleFailure,
  signInWithEmailSuccess,
  signInWithEmailFailure
} from "./user.actions";
import {
  googleProvider,
  auth,
  createUserProfileDoc
} from "../../firebase/firebase.utils";

/*** SIGN IN WITH GOOGLE SAGA ***/
export function* signInWithGoogleStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAsync);
}

function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDoc, user);

    const userSnapshot = yield userRef.get();

    // .put() things back to redux flow
    yield put(
      signInWithGoogleSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInWithGoogleFailure(error));
  }
}

/*** SIGN IN WITH EMAIL SAGA ***/
export function* signInWithEmailStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAsync);
}

function* signInWithEmailAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDoc, user);

    const userSnapshot = yield userRef.get();

    yield put(
      signInWithEmailSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInWithEmailFailure(error));
  }
}

/*** ROOT USER SAGA ***/
export function* userSagas() {
  yield all([call(signInWithGoogleStart), call(signInWithEmailStart)]);
}
