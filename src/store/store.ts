import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";

import { loggerMiddleware } from "./middlewares/logger-middleware";
import { persistedReducer } from "./middlewares/persist-middleware";

const composedEnhancers = compose(applyMiddleware(...loggerMiddleware));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
