import { saveAnswer, clearAnswers } from './actions';

export const reducer = (state = [], action) => {
	switch (action.type) {
		case saveAnswer.toString():
			const userAnswersCopy = state.slice();
			userAnswersCopy[action.payload.index] = action.payload.id;
			return userAnswersCopy;
		case clearAnswers.toString():
			return [];
		default:
			return state;
	}
};
