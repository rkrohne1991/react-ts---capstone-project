import { applyMiddleware, compose, createStore } from "redux";

import { persistMiddleware } from "./middlewares/persist-middleware";
import reducers from "./reducers";

const composedEnhancers = compose(applyMiddleware(...persistMiddleware));

export const store = createStore(reducers, undefined, composedEnhancers);
