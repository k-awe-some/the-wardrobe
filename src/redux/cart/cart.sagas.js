import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "../user/user.actions";
import { clearCart } from "./cart.actions";

/*** CLEAR CART ***/
function* clearCartOnSignOut() {
  yield put(clearCart());
  // dispatches clearCart() action to cartReducer
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  // on listening to SIGN_OUT_SUCCESS
  // executes clearCartOnSignOut()
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
