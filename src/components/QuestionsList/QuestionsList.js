import './QuestionsList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';

function QuestionsList({ questions, userAnswers }) {
	return (
		<ul className="QuestionsList">
			{questions.map(({ question, answers, right, id }, i) => {
				return (
					<li className="QuestionsList__item" key={id}>
						<Question
							question={question}
							answers={answers}
							rightAnswer={right}
							userAnswer={userAnswers[i]}
						/>
					</li>
				);
			})}
		</ul>
	);
}

QuestionsList.propTypes = {
	questions: PropTypes.array.isRequired,
	userAnswers: PropTypes.array.isRequired,
};

export default QuestionsList;
