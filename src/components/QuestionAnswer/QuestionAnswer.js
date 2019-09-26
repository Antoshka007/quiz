import './QuestionAnswer.css';
import React from 'react';
import PropTypes from 'prop-types';

class QuestionAnswer extends React.Component {
	static propTypes = {
		answer: PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired,
		onAnswer: PropTypes.func,
		isSuccess: PropTypes.bool,
		isFail: PropTypes.bool,
	};

	handleClick = () => {
		const { answer, onAnswer } = this.props;

		if (onAnswer) {
			onAnswer(answer.id);
		}
	};

	render() {
		const { answer, isSuccess, isFail, onAnswer } = this.props;

		return (
			<li
				className={
					'QuestionAnswer' +
					(isSuccess ? ' QuestionAnswer--success' : '') +
					(isFail ? ' QuestionAnswer--fail' : '')
				}
			>
				<button className="QuestionAnswer__btn" onClick={this.handleClick} disabled={!onAnswer}>
					{answer.text}
				</button>
			</li>
		);
	}
}

export default QuestionAnswer;
