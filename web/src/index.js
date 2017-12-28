import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
