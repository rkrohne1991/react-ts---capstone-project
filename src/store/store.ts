import { applyMiddleware, compose, createStore } from "redux";

import { loggerMiddleware } from "./middlewares/logger-middleware";
import reducers from "./reducers";

const composedEnhancers = compose(applyMiddleware(...loggerMiddleware));

export const store = createStore(reducers, undefined, composedEnhancers);
