import { IQuestionAnswer } from '../QuestionAnswer/QuestionAnswer.types';

export interface IQuestionAnswersProps {
	answers: Array<IQuestionAnswer>;
	onAnswer?: (answerId: string) => void;
	rightAnswer?: string;
	userAnswer?: string;
}