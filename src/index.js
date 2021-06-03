import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './components/App';
import rootReducer from './reducers';

        // Middlewares

// function logger(obj, next, action)
// logger(obj)(next)(action)  -->> Internally redux will call our middleware like this

const logger = ({dispatch, getStore}) => (next) => (action) => {
  // middleware code
  if(typeof action != 'function'){
    console.log('ACTION_TYPE = ', action.type);
  }
  else{console.log("ACTION_TYPE is: ", typeof action)}
  next(action);   // this will call the next middleware. And if it is the last middleware, then dispatch is called
}

// // thunk library works like this thunk middleware 
// const thunk = ({dispatch, getStore}) => (next) => (action) => {
//   if(typeof(action) == 'function'){
//     action(dispatch);  // Call that function
//     return;
//   }
//   next(action);  // Else call the next middleware / pass the action object to the reducer
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);

// Using context to store the store to be used by the nested components
export const StoreContext = createContext();
console.log("StoreContext", StoreContext);

class Provider extends React.Component{
  render(){
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
