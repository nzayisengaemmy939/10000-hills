// redux/store.js
import { createStore } from 'redux';
import rootReducer from './slices/reducers';

const store = createStore(rootReducer);

export default store;
