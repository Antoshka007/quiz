import './Results.css';
import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Button from '../Button/Button';
import QuestionsList from '../QuestionsList/QuestionsList';
import ResultsInfo from '../ResultsInfo/ResultsInfo';

function Results({ questions, userAnswers, onClickBtn }) {
	return (
		<div className="Results">
			<Title>Результаты</Title>
			<ResultsInfo
				successCount={getSuccessCount(questions, userAnswers)}
				count={questions.length}
			/>
			<QuestionsList questions={questions} userAnswers={userAnswers} />
			<div className="Results__btn-wrap">
				<Button onClick={onClickBtn}>Окей</Button>
			</div>
		</div>
	);
}

function getSuccessCount(questions, userAnswers) {
	return questions.reduce((accumulator, question, index) => {
		return accumulator + (question.right === userAnswers[index]);
	}, 0);
}

Results.propTypes = {
	questions: PropTypes.array.isRequired,
	userAnswers: PropTypes.array.isRequired,
	onClickBtn: PropTypes.func.isRequired,
};

export default Results;
