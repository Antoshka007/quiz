import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Results from '../Results/Results';
import questions from '../../data';

class ResultsPage extends React.Component {
	onClearAnswers = () => {
		const { clearAnswers } = this.props;

		clearAnswers();
	};

	render() {
		const { userAnswers } = this.props;
		const isAllQuestionsAnswered = questions.every((q, i) => !!userAnswers[i]);

		if (!isAllQuestionsAnswered) {
			return <Redirect to="/" />;
		}

		return (
			<Results questions={questions} userAnswers={userAnswers} onClickBtn={this.onClearAnswers} />
		);
	}
}

const mapStateToProps = state => {
	return { userAnswers: state.userAnswers };
};

const mapDispatchToProps = dispatch => {
	return {
		clearAnswers: () => {
			dispatch(clearAnswers());
		},
	};
};

const clearAnswers = (index, id) => {
	return { type: 'CLEAR_ANSWERS' };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsPage);