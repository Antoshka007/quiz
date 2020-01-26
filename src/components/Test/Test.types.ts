import { IQuestionAnswer } from '../../store/store.typings';

export interface ITestProps {
    question: string;
    answers: Array<IQuestionAnswer>;
    onAnswer: (answerId: string) => void;
    index: number;
    count: number;
    userAnswer?: string;
    userAnswers: Array<string>;
    isAllQuestionsAnswered?: boolean;
}
