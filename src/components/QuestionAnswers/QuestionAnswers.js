import './QuestionAnswers.css';
import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import PropTypes from 'prop-types';

function QuestionAnswers({ answers, onAnswer, rightAnswer, userAnswer }) {
	return (
		<ul className="QuestionAnswers">
			{answers.map(answer => (
				<QuestionAnswer
					key={answer.id}
					answer={answer}
					onAnswer={onAnswer}
					isSuccess={answer.id === rightAnswer}
					isFail={answer.id === userAnswer && userAnswer !== rightAnswer}
				/>
			))}
		</ul>
	);
}

QuestionAnswers.propTypes = {
	answers: PropTypes.array.isRequired,
	onAnswer: PropTypes.func,
	rightAnswer: PropTypes.string,
	userAnswer: PropTypes.string,
};

export default QuestionAnswers;
