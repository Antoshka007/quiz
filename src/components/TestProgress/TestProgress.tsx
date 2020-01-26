import './TestProgress.css';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ITestProgress, ITestProgressMapDispatchProps } from './TestProgress.types';
import { setPage } from '../../modules/pages/actions';

function TestProgress({ index, count, userAnswers, setPage }: ITestProgress) {
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
						<span className="TestProgress__item-link" onClick={() => setPage(`/questions/${n}`)}>
							{n}
						</span>
					</li>
				);
			})}
		</ul>
	);
}

const mapDispatchToProps = (dispatch: Dispatch): ITestProgressMapDispatchProps => ({
	setPage: (page) => dispatch(setPage(page))
});

export default connect(null, mapDispatchToProps)(TestProgress);
