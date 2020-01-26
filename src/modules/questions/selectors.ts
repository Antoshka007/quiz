import { IState } from '../../store/store.typings';

export const getQuestions = (state: IState) => state.questions.data;
export const getQuestionsIsLoading = (state: IState) => state.questions.isLoading;
export const getQuestionsError = (state: IState) => state.questions.error;
