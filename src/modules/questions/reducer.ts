import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';

const data = handleActions(
	{
		[fetchQuestionsSuccess.toString()]: (state, action: ReturnType<typeof fetchQuestionsSuccess>) => action.payload,
	},
	[]
);

const isLoading = handleActions(
	{
		[fetchQuestionsRequest.toString()]: () => true,
		[fetchQuestionsSuccess.toString()]: () => false,
		[fetchQuestionsFailure.toString()]: () => false,
	},
	false
);

const error = handleActions(
	{
		[fetchQuestionsFailure.toString()]: (state, action: ReturnType<typeof fetchQuestionsFailure>) => action.payload,
	},
	null
);

export const reducer = combineReducers({ data, isLoading, error });
