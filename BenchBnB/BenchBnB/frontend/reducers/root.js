import { combineReducers } from "redux";
import sessionReducer from './sessions_reducer'
import usersReducer from "./users_reducer";

const RootReducer = combineReducers({
    session: sessionReducer,
    user: usersReducer
})

export default RootReducer;