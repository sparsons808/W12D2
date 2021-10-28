import { combineReducers } from "redux";
import sessionReducer from './sessions_reducer'
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default RootReducer;