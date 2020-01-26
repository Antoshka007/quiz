import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';
import Results from '../Results/Results';
import { clearAnswers, getUserAnswers } from '../../modules/answers';
import { getQuestions } from '../../modules/questions';
import { IResultsPageProps, IResultPageMapStateProps, IResultPageMapDispatchProps } from './ResultsPage.types';
import { IState } from '../../store/store.typings';

class ResultsPage extends React.Component<IResultsPageProps> {
	onClearAnswers = () => {
		const { clearAnswers } = this.props;

		clearAnswers();
	};

	render() {
		const { userAnswers, questions } = this.props;
		const isAllQuestionsAnswered = questions.every((q, i) => !!userAnswers[i]);

		if (!isAllQuestionsAnswered) {
			return <Redirect to="/" />;
		}

		return (
			<Results questions={questions} userAnswers={userAnswers} onClickBtn={this.onClearAnswers} />
		);
	}
}

const mapStateToProps = (state: IState): IResultPageMapStateProps => ({
	userAnswers: getUserAnswers(state),
	questions: getQuestions(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IResultPageMapDispatchProps => {
	return {
		clearAnswers: () => {
			dispatch(clearAnswers());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsPage);
