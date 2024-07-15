// redux/reducers.js
import { combineReducers } from 'redux';

const initialState = {
  example: 'Hello Redux'
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  example: exampleReducer,
});
