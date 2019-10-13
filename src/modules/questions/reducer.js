import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';

const data = handleActions(
	{
		[fetchQuestionsSuccess]: (state, action) => action.payload,
	},
	[]
);

const isLoading = handleActions(
	{
		[fetchQuestionsRequest]: () => true,
		[fetchQuestionsSuccess]: () => false,
		[fetchQuestionsFailure]: () => false,
	},
	false
);

const error = handleActions(
	{
		[fetchQuestionsFailure]: (state, action) => action.payload,
	},
	null
);

export const reducer = combineReducers({ data, isLoading, error });
