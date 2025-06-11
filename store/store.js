import { createStore, applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from '../reducers/productsReducer'; //Import the reducer

// Connect our store to the reducers
const store =  createStore(productsReducer, compose(applyMiddleware(thunk)));


export default store;
