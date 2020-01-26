import './QuestionAnswer.css';
import React from 'react';
import { IQuestionAnswerProps } from './QuestionAnswer.types';

class QuestionAnswer extends React.Component<IQuestionAnswerProps> {
	handleClick = () => {
		const { answer, onAnswer } = this.props;

		if (onAnswer) {
			onAnswer(answer.id);
		}
	};

	render() {
		const { answer, isSuccess, isFail, isSelected, onAnswer } = this.props;

		return (
			<li
				className={
					'QuestionAnswer' +
					(isSuccess ? ' QuestionAnswer--success' : '') +
					(isFail ? ' QuestionAnswer--fail' : '') +
					(isSelected ? ' QuestionAnswer--selected' : '')
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
