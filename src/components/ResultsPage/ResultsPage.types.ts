import { IQuestion } from '../../store/store.typings';
import { setPage } from '../../modules/pages/actions';
import { clearAnswers } from '../../modules/answers/actions';

export interface IResultPageMapStateProps {
	userAnswers: string[];
	questions: Array<IQuestion>;
}

export interface IResultPageMapDispatchProps {
	clearAnswers: typeof clearAnswers;
	setPage: typeof setPage;
}

export interface IResultsPageProps extends IResultPageMapStateProps, IResultPageMapDispatchProps {}
