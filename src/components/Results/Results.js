import './Results.css';
import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import Title from '../Title/Title';
import Button from '../Button/Button';

function Results({ questions, userAnswers, onClickBtn }) {
	return (
		<div className="Results">
			<Title>Результаты</Title>

			{questions.map(({ question, answers, right, id }, i) => {
				return (
					<Question
						key={id}
						question={question}
						answers={answers}
						rightAnswer={right}
						userAnswer={userAnswers[i]}
					/>
				);
			})}

			<div className="Results__btn-wrap">
				<Button onClick={onClickBtn}>Начать сначала</Button>
			</div>
		</div>
	);
}

Results.propTypes = {
	questions: PropTypes.array,
	userAnswers: PropTypes.array,
	onClickBtn: PropTypes.func,
};

export default Results;
