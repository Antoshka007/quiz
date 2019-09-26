import './Test.css';
import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import Title from '../Title/Title';
import TestProgress from '../TestProgress/TestProgress';

function Test({ question, answers, onAnswer, index, count }) {
	return (
		<div className="Test">
			<Title>Тест на знания JavaScript</Title>
			<TestProgress index={index} count={count} />
			<Question question={question} answers={answers} onAnswer={onAnswer} />
		</div>
	);
}

Test.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
	onAnswer: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
};

export default Test;
