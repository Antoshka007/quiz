import './QuestionsList.css';
import React from 'react';
import Question from '../Question/Question';
import { IQuestionsListProps } from './QuestionsList.types';

function QuestionsList({ questions, userAnswers }: IQuestionsListProps) {
	return (
		<ul className="QuestionsList">
			{questions.map(({ question, answers, right, id }, i) => {
				return (
					<li className="QuestionsList__item" key={id}>
						<Question
							question={question}
							answers={answers}
							rightAnswer={right}
							userAnswer={userAnswers[i]}
						/>
					</li>
				);
			})}
		</ul>
	);
}

export default QuestionsList;
