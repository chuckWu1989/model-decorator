import { combineReducers } from 'redux';
import countReducer from './countReducer';

const reducer = combineReducers({
  countReducer,
});

export default reducer;
