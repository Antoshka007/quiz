import { IQuestionAnswer } from '../../store/store.typings';

export interface IQuestionAnswerProps {
	answer: IQuestionAnswer;
	onAnswer?: (answerId: string) => void;
	isSuccess?: boolean;
	isFail?: boolean;
	isSelected?: Boolean;
}
