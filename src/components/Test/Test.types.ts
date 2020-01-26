import { IQuestionAnswer } from '../QuestionAnswer/QuestionAnswer.types';

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
