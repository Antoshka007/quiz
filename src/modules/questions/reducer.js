import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';

export const reducer = (state = { data: [], isLoading: false, error: null }, action) => {
	switch (action.type) {
		case fetchQuestionsRequest.toString():
			return {
				...state,
				isLoading: true,
			};
		case fetchQuestionsSuccess.toString():
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		case fetchQuestionsFailure.toString():
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
