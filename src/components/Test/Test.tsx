import './Test.css';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Question from '../Question/Question';
import TestProgress from '../TestProgress/TestProgress';
import Button from '../Button/Button';
import { ITestProps, ITestMapDispatchProps } from './Test.types';
import { setPage } from '../../modules/pages';

function Test({
	question,
	answers,
	onAnswer,
	index,
	count,
	userAnswer,
	userAnswers,
	isAllQuestionsAnswered,
	setPage,
}: ITestProps) {
	const isPrevDisabled = index === 1;
	const isNextDisabled = index === count;
	const goToPrevQuestion = () => setPage(`/questions/${index - 1}`);
	const goToNextQuestion = () => setPage(`/questions/${index + 1}`);
	const goToResults = () => setPage('/results');

	return (
		<div className="Test">
			<TestProgress index={index} count={count} userAnswers={userAnswers} />
			<Question question={question} answers={answers} onAnswer={onAnswer} userAnswer={userAnswer} />

			<p className="Test__buttons">
				{isPrevDisabled ? (
					<Button className="Test__button" isDisabled={true}>
						Предыдущий вопрос
					</Button>
				) : (
					<Button className="Test__button" onClick={goToPrevQuestion}>
						Предыдущий вопрос
					</Button>
				)}

				{isNextDisabled ? (
					<Button className="Test__button" isDisabled={true}>
						Следующий вопрос
					</Button>
				) : (
					<Button className="Test__button" onClick={goToNextQuestion}>
						Следующий вопрос
					</Button>
				)}

				{isAllQuestionsAnswered ? (
					<Button className="Test__button Test__button--finished" onClick={goToResults}>
						Закончить
					</Button>
				) : null}
			</p>
		</div>
	);
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch): ITestMapDispatchProps => ({
	setPage: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
