import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';
import { IQuestion } from '../../store/store.typings';
import { Middleware } from 'redux';

export const questionsMiddleware: Middleware = store => next => action => {
	if (action.type === fetchQuestionsRequest.toString()) {
		fetch('https://next.json-generator.com/api/json/get/E1g56HnOw')
			.then(response => response.json())
			.then((questions: Array<IQuestion>) => {
				store.dispatch(fetchQuestionsSuccess(questions));
			})
			.catch((error: Error) => {
				store.dispatch(fetchQuestionsFailure(error));
			});
	}

	return next(action);
};
