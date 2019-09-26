import './Test.css';
import React from 'react';
import Question from '../Question/Question';
import Title from '../Title/Title';

function Test(props) {
	return (
		<div className="Test">
			<Title>Тест на знания JavaScript</Title>
			<Question {...props} />
		</div>
	);
}

export default Test;
