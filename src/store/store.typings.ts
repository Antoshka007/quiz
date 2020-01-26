export interface IState {
    userAnswers: Array<string>;
    questions: {
        data: Array<IQuestion>;
        isLoading: boolean;
        error: Error | null;
    };
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