import './TestProgress.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ITestProgress } from './TestProgress.types';

function TestProgress({ index, count, userAnswers }: ITestProgress) {
	const questionNumbers = [];

	for (let i = 0; i < count; i++) questionNumbers.push(i + 1);

	return (
		<ul className="TestProgress">
			{questionNumbers.map(n => {
				const isCurrent = index === n;
				const isSelected = !!userAnswers[n - 1];

				return (
					<li
						className={
							'TestProgress__item' +
							(isSelected ? ' TestProgress__item--selected' : '') +
							(isCurrent ? ' TestProgress__item--current' : '')
						}
						key={n}
					>
						<Link className="TestProgress__item-link" to={`/questions/${n}`}>
							{n}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default TestProgress;
