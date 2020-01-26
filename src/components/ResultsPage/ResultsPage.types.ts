import { IQuestion } from '../../store/store.typings';

export interface IResultPageMapStateProps {
	userAnswers: string[];
	questions: Array<IQuestion>;
}

export interface IResultPageMapDispatchProps {
	clearAnswers: () => void;
}

export interface IResultsPageProps extends IResultPageMapStateProps, IResultPageMapDispatchProps {}
