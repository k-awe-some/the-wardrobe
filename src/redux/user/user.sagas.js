import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  userActionTypes,
  signInWithGoogleSuccess,
  signInWithGoogleFailure
} from "./user.actions";
import {
  googleProvider,
  auth,
  createUserProfileDoc
} from "../../firebase/firebase.utils";

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
      signInWithGoogleSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(signInWithGoogleFailure(error));
  }
}

export function* userSagas() {
  yield all([call(signInWithGoogleStart)]);
}
