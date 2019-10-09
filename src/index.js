import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore((state = { userAnswers: [] }, action) => {
	switch (action.type) {
		case 'SAVE_ANSWER':
			const userAnswersCopy = state.userAnswers.slice();
			userAnswersCopy[action.payload.index] = action.payload.id;
			return { userAnswers: userAnswersCopy };
		case 'CLEAR_ANSWERS':
			return { userAnswers: [] };
		default:
			return state;
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('.root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
