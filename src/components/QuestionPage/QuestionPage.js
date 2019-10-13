import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Test from '../Test/Test';
import { saveAnswer, getUserAnswers } from '../../modules/answers';
import { getQuestions } from '../../modules/questions';

class QuestionPage extends React.Component {
	onAnswer = id => {
		const { match, saveAnswer } = this.props;
		const index = +match.params.index - 1;

		saveAnswer({ index, id });
	};

	render() {
		const { match, userAnswers, questions } = this.props;
		const index = +match.params.index;
		const question = questions[index - 1];
		const isAllQuestionsAnswered = questions.every((q, i) => !!userAnswers[i]);

		if (!question) {
			return <NotFoundPage />;
		}

		return (
			<Test
				question={question.question}
				answers={question.answers}
				onAnswer={this.onAnswer}
				index={index}
				count={questions.length}
				userAnswer={userAnswers[index - 1]}
				userAnswers={userAnswers}
				isAllQuestionsAnswered={isAllQuestionsAnswered}
			/>
		);
	}
}

const mapStateToProps = state => ({
	userAnswers: getUserAnswers(state),
	questions: getQuestions(state),
});

const mapDispatchToProps = dispatch => {
	return {
		saveAnswer: ({ index, id }) => {
			dispatch(saveAnswer({ index, id }));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionPage);
