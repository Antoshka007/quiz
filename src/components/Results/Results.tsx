import './Results.css';
import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import QuestionsList from '../QuestionsList/QuestionsList';
import ResultsInfo from '../ResultsInfo/ResultsInfo';
import { IResultsProps } from './Results.types';
import { IQuestion } from '../../store/store.typings';

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

function getSuccessCount(questions: Array<IQuestion>, userAnswers: Array<string>) {
	return questions.reduce((accumulator, question, index) => {
		if (question.right === userAnswers[index]) {
			return accumulator + 1;
		}

		return accumulator;
	}, 0);
}

export default Results;
