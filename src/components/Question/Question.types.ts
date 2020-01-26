import { IQuestionAnswer } from '../../store/store.typings';

export interface IQuestionProps {
	question: string;
	answers: Array<IQuestionAnswer>;
	onAnswer?: (answerId: string) => void;
	rightAnswer?: string;
	userAnswer?: string;
}
