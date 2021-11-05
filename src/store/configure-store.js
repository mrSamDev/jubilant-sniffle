import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const bindMiddleware = () => {
	if (process.env.NODE_ENV === "development") return applyMiddleware(sagaMiddleware, createLogger());
	return applyMiddleware(sagaMiddleware);
};

const store = createStore(rootReducer, bindMiddleware());
sagaMiddleware.run(rootSaga);

export default store;
