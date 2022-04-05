import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";

import { loggerMiddleware } from "./middlewares/logger-middleware";
import { persistedReducer } from "./middlewares/persist-middleware";

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers =
  process.env.NODE_ENV === "development"
    ? composeEnhancer(applyMiddleware(...loggerMiddleware))
    : composeEnhancer(applyMiddleware());

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
