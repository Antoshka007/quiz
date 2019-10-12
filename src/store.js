import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as answersReducer } from './modules/answers';
import { reducer as questionsReducer, questionsMiddleware } from './modules/questions';

export default () => {
	return createStore(
		combineReducers({ userAnswers: answersReducer, questions: questionsReducer }),
		compose(
			applyMiddleware(questionsMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
};
