import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { carReducer } from './reducers/carReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Step 1 - Create store and connect to the react app
const store = createStore(carReducer);
console.log('This is the store: ', store);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />{' '}
	</Provider>,
	rootElement
);
