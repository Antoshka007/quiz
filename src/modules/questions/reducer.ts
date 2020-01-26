import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchQuestionsRequest, fetchQuestionsSuccess, fetchQuestionsFailure } from './actions';

const data = handleActions(
	{
		[fetchQuestionsSuccess as any]: (state, action) => action.payload,
	},
	[]
);

const isLoading = handleActions(
	{
		[fetchQuestionsRequest as any]: () => true,
		[fetchQuestionsSuccess as any]: () => false,
		[fetchQuestionsFailure as any]: () => false,
	},
	false
);

const error = handleActions(
	{
		[fetchQuestionsFailure as any]: (state, action) => action.payload,
	},
	null
);

export const reducer = combineReducers({ data, isLoading, error });
