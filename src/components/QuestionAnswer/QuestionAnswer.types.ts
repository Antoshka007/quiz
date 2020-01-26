export interface IQuestionAnswer {
	id: string;
	text: string;
}

export interface IQuestionAnswerProps {
	answer: IQuestionAnswer;
	onAnswer?: (answerId: string) => void;
	isSuccess?: boolean;
	isFail?: boolean;
	isSelected?: Boolean;
}
