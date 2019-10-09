import './TestProgress.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TestProgress({ index, count, userAnswers }) {
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

TestProgress.propTypes = {
	index: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	userAnswers: PropTypes.array.isRequired,
};

export default TestProgress;
