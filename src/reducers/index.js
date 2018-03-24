import { combineReducers } from 'redux';
import developerReducer from './developerReducer';

const allReducers = combineReducers({
  developerReducer: developerReducer
});

export default allReducers;
