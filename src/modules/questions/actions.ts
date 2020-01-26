import { createAction } from 'redux-actions';
import { IQuestion } from '../../store/store.typings';

export const fetchQuestionsRequest = createAction('FETCH_QUESTIONS_REQUEST');
export const fetchQuestionsSuccess = createAction<Array<IQuestion>>('FETCH_QUESTIONS_SUCCESS');
export const fetchQuestionsFailure = createAction<Error>('FETCH_QUESTIONS_FAILURE');
