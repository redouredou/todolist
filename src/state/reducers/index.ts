import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer"
import todoReducer from "./todoReducer";

const reducers = combineReducers({
     notification: notificationReducer,
     todos: todoReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>