import './QuestionTitle.css';
import React from 'react';
import { IQuestionTitleProps } from './QuestionTitle.types';

function QuestionTitle({ children }: IQuestionTitleProps) {
	return <p className="QuestionTitle">{children}</p>;
}

export default QuestionTitle;
