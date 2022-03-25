import {applyMiddleware, combineReducers, createStore} from "redux";
import imageReducer from "./Reducers/imageReducer";
import thunk from "redux-thunk";

export default createStore(combineReducers({
    imagePage: imageReducer
}), applyMiddleware(thunk))