import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveRepo from './activeReducer.js';

const allReducers= combineReducers({
  repos: GitReducer,
  activeRepo: ActiveRepo
});

export default allReducers;
