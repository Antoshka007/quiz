import './Results.css';
import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import QuestionsList from '../QuestionsList/QuestionsList';
import ResultsInfo from '../ResultsInfo/ResultsInfo';
import { IResultsProps } from './Results.types';

function Results({ questions, userAnswers, onClickBtn }: IResultsProps) {
	return (
		<div className="Results">
			<Title>Результат</Title>
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

function getSuccessCount(questions: Array<any>, userAnswers: string[]) {
	return questions.reduce((accumulator, question, index) => {
		return accumulator + (question.right === userAnswers[index]);
	}, 0);
}

export default Results;
