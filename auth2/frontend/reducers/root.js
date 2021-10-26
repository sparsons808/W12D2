import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import { sessioinReducer } from './session';

export default combineReducers({
  entities: entitiesReducer,
  session: sessioinReducer,
});
