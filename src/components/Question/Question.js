import './Question.css';
import React from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers';
import PropTypes from 'prop-types';

function Question({ question, answers, onAnswer, rightAnswer, userAnswer }) {
	return (
		<div className="Question">
			<div className="Question__inner">
				<QuestionTitle>{question}</QuestionTitle>
				<QuestionAnswers
					answers={answers}
					onAnswer={onAnswer}
					rightAnswer={rightAnswer}
					userAnswer={userAnswer}
				/>
			</div>
		</div>
	);
}

Question.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
	onAnswer: PropTypes.func,
	rightAnswer: PropTypes.string,
	userAnswer: PropTypes.string,
};

export default Question;
