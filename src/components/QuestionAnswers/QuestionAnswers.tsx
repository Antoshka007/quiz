import './QuestionAnswers.css';
import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import { IQuestionAnswersProps } from './QuestionAnswers.types';

function QuestionAnswers({ answers, onAnswer, rightAnswer, userAnswer }: IQuestionAnswersProps) {
	return (
		<ul className="QuestionAnswers">
			{answers.map(answer => (
				<QuestionAnswer
					key={answer.id}
					answer={answer}
					onAnswer={onAnswer}
					isSelected={!rightAnswer && userAnswer === answer.id}
					isSuccess={!!rightAnswer && answer.id === rightAnswer}
					isFail={!!rightAnswer && answer.id === userAnswer && userAnswer !== rightAnswer}
				/>
			))}
		</ul>
	);
}

export default QuestionAnswers;
