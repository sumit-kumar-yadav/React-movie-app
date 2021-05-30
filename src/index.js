import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';


import './index.css';
import App from './components/App';
import rootReducer from './reducers';


// function logger(obj, next, action)
// logger(obj)(next)(action)  -->> Internally redux will call our middleware like this
const logger = function({dispatch, getStore}) {
  return function(next) {
    return function(action ){
      // middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action);   // this will call the next middleware. And if it is the last middleware, then dispatch is called
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
