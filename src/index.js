import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducer from './reducers/reducer';
import App from './containers/App';

// let store = createStore(reducer);
var store = createStore(reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ); //for redux dev tool

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);