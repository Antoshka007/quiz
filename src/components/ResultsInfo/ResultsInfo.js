import './ResultsInfo.css';
import React from 'react';
import PropTypes from 'prop-types';

function ResultsInfo({ successCount, count }) {
	return (
		<p className="ResultsInfo">
			Количество правильных ответов: {successCount} из {count}
		</p>
	);
}

ResultsInfo.propTypes = {
	successCount: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
};

export default ResultsInfo;
