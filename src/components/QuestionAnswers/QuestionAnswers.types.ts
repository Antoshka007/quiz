import { IQuestionAnswer } from '../../store/store.typings';

export interface IQuestionAnswersProps {
	answers: Array<IQuestionAnswer>;
	onAnswer?: (answerId: string) => void;
	rightAnswer?: string;
	userAnswer?: string;
}