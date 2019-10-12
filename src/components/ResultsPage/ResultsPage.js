import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Results from '../Results/Results';
import { clearAnswers } from '../../modules/answers';

class ResultsPage extends React.Component {
	onClearAnswers = () => {
		const { clearAnswers } = this.props;

		clearAnswers();
	};

	render() {
		const {
			userAnswers,
			questions: { data },
		} = this.props;
		const isAllQuestionsAnswered = data.every((q, i) => !!userAnswers[i]);

		if (!isAllQuestionsAnswered) {
			return <Redirect to="/" />;
		}

		return <Results questions={data} userAnswers={userAnswers} onClickBtn={this.onClearAnswers} />;
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
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
