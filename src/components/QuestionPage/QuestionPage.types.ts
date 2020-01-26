import { IQuestion } from '../../store/store.typings';
import { saveAnswer } from '../../modules/answers';

export interface IQuestionPageMapStateProps {
	userAnswers: Array<string>;
	questions: Array<IQuestion>;
}

export interface IQuestionPageMapDispatchProps {
	saveAnswer: typeof saveAnswer;
}

export interface IQuestionPageOwnProps {
	number: number;
}

export interface IQuestionPageProps extends IQuestionPageMapStateProps, IQuestionPageMapDispatchProps, IQuestionPageOwnProps {}
