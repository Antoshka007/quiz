import { saveAnswer, clearAnswers } from './actions';

export const reducer = (state = { userAnswers: [] }, action) => {
	switch (action.type) {
		case saveAnswer.toString():
			const userAnswersCopy = state.userAnswers.slice();
			userAnswersCopy[action.payload.index] = action.payload.id;
			return { userAnswers: userAnswersCopy };
		case clearAnswers.toString():
			return { userAnswers: [] };
		default:
			return state;
	}
};
