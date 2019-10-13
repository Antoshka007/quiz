import { handleActions } from 'redux-actions';
import { saveAnswer, clearAnswers } from './actions';

export const reducer = handleActions(
	{
		[saveAnswer]: (state, action) => {
			const userAnswersCopy = state.slice();
			userAnswersCopy[action.payload.index] = action.payload.id;
			return userAnswersCopy;
		},
		[clearAnswers]: () => [],
	},
	[]
);
