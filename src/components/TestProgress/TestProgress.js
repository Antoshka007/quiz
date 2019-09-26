import './TestProgress.css';
import React from 'react';
import PropTypes from 'prop-types';

function TestProgress({ index, count }) {
	const progress = Math.round(((index - 1) / count) * 100);

	return (
		<p className="TestProgress">
			<span className="TestProgress__text">
				Вопрос {index} из {count}
			</span>
			<span className="TestProgress__progress" style={{ width: progress + '%' }}></span>
		</p>
	);
}

TestProgress.propTypes = {
	index: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
};

export default TestProgress;
