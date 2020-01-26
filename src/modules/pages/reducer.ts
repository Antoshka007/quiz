import { handleActions } from 'redux-actions';
import { setPage } from './actions';
import { IState } from '../../store/store.typings';

export const reducer = handleActions(
	{
		[setPage.toString()]: (state: IState['page'], action: ReturnType<typeof setPage>) => {
			return action.payload;
		},
	},
	'/'
);
