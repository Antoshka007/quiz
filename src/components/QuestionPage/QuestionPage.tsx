import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Test from '../Test/Test';
import { saveAnswer, getUserAnswers } from '../../modules/answers';
import { getQuestions } from '../../modules/questions';
import {
	IQuestionPageMapStateProps,
	IQuestionPageMapDispatchProps,
	IQuestionPageProps,
} from './QuestionPage.types';
import { IState } from '../../store/store.typings';
import { setPage } from '../../modules/pages/actions';

class QuestionPage extends React.Component<IQuestionPageProps> {
	onAnswer = (id: string) => {
		const { number, saveAnswer, setPage } = this.props;
		const index = number - 1;
		const nextQuestion = this.getNextQuestionNumber();

		saveAnswer({ index, id });

		if (nextQuestion) {
			setPage(`/questions/${nextQuestion}`);
		}
	};

	getNextQuestionNumber(): number | null {
		const { questions, userAnswers, number } = this.props;
		const traversalOrder = [];

		for (let i = number; i !== number - 1; i++) {
			if (questions[i]) {
				traversalOrder.push(i);
			} else {
				i = -1;
			}
		}

		for (let i = 0; i < traversalOrder.length; i++) {
			const questionIndex = traversalOrder[i];

			if (!userAnswers[questionIndex]) {
				return questionIndex + 1;
			}
		}

		return null;
	}

	render() {
		const { number, userAnswers, questions } = this.props;
		const question = questions[number - 1];
		const isAllQuestionsAnswered = questions.every((q, i: number) => !!userAnswers[i]);

		if (!question) {
			return <NotFoundPage />;
		}

		return (
			<Test
				question={question.question}
				answers={question.answers}
				onAnswer={this.onAnswer}
				index={number}
				count={questions.length}
				userAnswer={userAnswers[number - 1]}
				userAnswers={userAnswers}
				isAllQuestionsAnswered={isAllQuestionsAnswered}
			/>
		);
	}
}

const mapStateToProps = (state: IState): IQuestionPageMapStateProps => ({
	userAnswers: getUserAnswers(state),
	questions: getQuestions(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IQuestionPageMapDispatchProps => {
	return {
		saveAnswer: payload => dispatch(saveAnswer(payload)),
		setPage: page => dispatch(setPage(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionPage);
