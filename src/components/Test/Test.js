import './Test.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import Title from '../Title/Title';
import TestProgress from '../TestProgress/TestProgress';
import Button from '../Button/Button';

function Test({
	question,
	answers,
	onAnswer,
	index,
	count,
	userAnswer,
	userAnswers,
	isAllQuestionsAnswered,
}) {
	const isPrevDisabled = index === 1;
	const isNextDisabled = index === count;

	return (
		<div className="Test">
			<Title>Викторина</Title>
			<TestProgress index={index} count={count} userAnswers={userAnswers} />
			<Question question={question} answers={answers} onAnswer={onAnswer} userAnswer={userAnswer} />

			<p className="Test__buttons">
				{isPrevDisabled ? (
					<Button className="Test__button" isDisabled={true}>
						Предыдущий вопрос
					</Button>
				) : (
					<Link className="Test__button" to={`/questions/${index - 1}`}>
						<Button className="Test__button-inner">Предыдущий вопрос</Button>
					</Link>
				)}

				{isNextDisabled ? (
					<Button className="Test__button" isDisabled={true}>
						Следующий вопрос
					</Button>
				) : (
					<Link className="Test__button" to={`/questions/${index + 1}`}>
						<Button className="Test__button-inner">Следующий вопрос</Button>
					</Link>
				)}

				{isAllQuestionsAnswered ? (
					<Link className="Test__button Test__button--finished" to="/results">
						<Button className="Test__button-inner">Закончить</Button>
					</Link>
				) : null}
			</p>
		</div>
	);
}

Test.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
	onAnswer: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	userAnswer: PropTypes.string,
	userAnswers: PropTypes.array.isRequired,
	isAllQuestionsAnswered: PropTypes.bool,
};

export default Test;
