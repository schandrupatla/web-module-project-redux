import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';
 import movieReducer from './reducers/index'
 import rootReducer from './reducers/index'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// const store  = createStore(movieReducer);
const store  = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
