import { IQuestionAnswer } from '../QuestionAnswer/QuestionAnswer.types';

export interface IQuestionProps {
	question: string;
	answers: Array<IQuestionAnswer>;
	onAnswer?: (answerId: string) => void;
	rightAnswer?: string;
	userAnswer?: string;
}
