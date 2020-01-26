import { IQuestion } from '../../store/store.typings';

export interface IResultsProps {
	questions: Array<IQuestion>;
	userAnswers: string[];
	onClickBtn: () => void;
}
