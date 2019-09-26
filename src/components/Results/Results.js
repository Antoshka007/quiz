import './Results.css';
import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Button from '../Button/Button';
import QuestionsList from '../QuestionsList/QuestionsList';

function Results({ questions, userAnswers, onClickBtn }) {
	return (
		<div className="Results">
			<Title>Результаты</Title>
			<QuestionsList questions={questions} userAnswers={userAnswers} />
			<div className="Results__btn-wrap">
				<Button onClick={onClickBtn}>Окей</Button>
			</div>
		</div>
	);
}

Results.propTypes = {
	questions: PropTypes.array.isRequired,
	userAnswers: PropTypes.array.isRequired,
	onClickBtn: PropTypes.func.isRequired,
};

export default Results;
