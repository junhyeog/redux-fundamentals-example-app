import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composedEnhancer = composeWithDevTools(
	// Add whatever middleware you actually want to use here
	applyMiddleware(thunk)
	// other store enhancers if any
);

const store = createStore(rootReducer, composedEnhancer);
export default store;
