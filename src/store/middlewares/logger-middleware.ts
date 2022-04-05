import logger from "redux-logger";
import thunk from "redux-thunk";

export const loggerMiddleware = [logger, thunk];
