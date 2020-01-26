import { createAction } from 'redux-actions';

export const fetchQuestionsRequest = createAction('FETCH_QUESTIONS_REQUEST');
export const fetchQuestionsSuccess = createAction('FETCH_QUESTIONS_SUCCESS');
export const fetchQuestionsFailure = createAction('FETCH_QUESTIONS_FAILURE');
