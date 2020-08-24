import { applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger"
import { searchFieldReducer, requestRobotsReducer } from "./reducers";
import reduxThunk from "redux-thunk";
const { createStore } = require("redux");

const rootReducer = combineReducers({
    searchFieldArea: searchFieldReducer,
    robotsData: requestRobotsReducer
}) 

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));

export default store;