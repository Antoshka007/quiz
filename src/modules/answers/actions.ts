import { createAction } from 'redux-actions';

export interface ISaveAnswerActionPayload {
    index: number;
    id: string;
}

export const saveAnswer = createAction<ISaveAnswerActionPayload>('SAVE_ANSWER');
export const clearAnswers = createAction('CLEAR_ANSWERS');
