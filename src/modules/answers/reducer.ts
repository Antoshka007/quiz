import { handleActions } from 'redux-actions';
import { saveAnswer, clearAnswers } from './actions';
import { IState } from '../../store/store.typings';

export const reducer = handleActions(
	{
		[saveAnswer.toString()]: (state: IState['userAnswers'], action: ReturnType<typeof saveAnswer>) => {
			const userAnswersCopy = state.slice();
			userAnswersCopy[action.payload.index] = action.payload.id;
			return userAnswersCopy;
		},
		[clearAnswers.toString()]: () => [],
	},
	[]
);
