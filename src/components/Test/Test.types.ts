import { IQuestionAnswer } from '../../store/store.typings';
import { setPage } from '../../modules/pages';

export interface ITestMapDispatchProps {
    setPage: typeof setPage;
}

export interface ITestProps extends ITestMapDispatchProps {
    question: string;
    answers: Array<IQuestionAnswer>;
    onAnswer: (answerId: string) => void;
    index: number;
    count: number;
    userAnswer?: string;
    userAnswers: Array<string>;
    isAllQuestionsAnswered?: boolean;
}
