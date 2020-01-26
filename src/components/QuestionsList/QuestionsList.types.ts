import { IQuestion } from '../../store/store.typings';

export interface IQuestionsListProps {
	questions: Array<IQuestion>;
	userAnswers: Array<string>;
}
