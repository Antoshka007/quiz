export interface IState {
    userAnswers: Array<string>;
    questions: Array<IQuestion>;
    page: string;
}

export interface IQuestion {
    id: string;
    question: string;
    answers: Array<IQuestionAnswer>;
    right: string;
}

export interface IQuestionAnswer {
	id: string;
	text: string;
}