import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';

export const questionsMiddleware = store => next => action => {
	if (action.type === fetchQuestionsRequest.toString()) {
		fetch('https://next.json-generator.com/api/json/get/E1g56HnOw')
			.then(response => response.json())
			.then(questions => {
				store.dispatch(fetchQuestionsSuccess(questions));
			})
			.catch(error => {
				store.dispatch(fetchQuestionsFailure(error));
			});
	}

	return next(action);
};
