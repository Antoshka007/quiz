import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as answersReducer } from './modules/answers';
import { reducer as questionsReducer, questionsMiddleware } from './modules/questions';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(
		combineReducers({ userAnswers: answersReducer, questions: questionsReducer }),
		composeEnhancers(applyMiddleware(questionsMiddleware))
	);
};
