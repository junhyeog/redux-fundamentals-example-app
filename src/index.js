import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import './api/server';

import store from './store';

console.log('Dispatching action');
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
console.log('Dispatch complete');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
