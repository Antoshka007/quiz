import './Question.css';
import React from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers';
import { IQuestionProps } from './Question.types';

function Question({ question, answers, onAnswer, rightAnswer, userAnswer }: IQuestionProps) {
	return (
		<div className="Question">
			<div className="Question__inner">
				<QuestionTitle>{question}</QuestionTitle>
				<QuestionAnswers
					answers={answers}
					onAnswer={onAnswer}
					rightAnswer={rightAnswer}
					userAnswer={userAnswer}
				/>
			</div>
		</div>
	);
}

export default Question;
