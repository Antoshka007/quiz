import { createStore, combineReducers, compose } from 'redux';
import { reducer as answersReducer } from '../modules/answers';
import { reducer as questionsReducer } from '../modules/questions';
import { reducer as pageReducer } from '../modules/pages';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = {
	userAnswers: answersReducer,
	questions: questionsReducer,
	page: pageReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(
		combineReducers(reducers),
		composeEnhancers()
	);
};
