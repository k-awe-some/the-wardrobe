import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root.saga";

import rootReducer from "./root.reducer";

const sagas = createSagaMiddleware();
const middlewares = [logger, sagas];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagas.run(rootSaga); // to be passed in each individual saga to run

// create a persisted version of 'store'
export const persistor = persistStore(store);
