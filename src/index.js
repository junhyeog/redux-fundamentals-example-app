import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import './api/server';

import store from './store';

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// log: 'Hi!'

console.log('State after dispatch: ', store.getState());
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
