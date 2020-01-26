import './ResultsInfo.css';
import React from 'react';
import { IResultInfoProps } from './ResultsInfo.types';

function ResultsInfo({ successCount, count }: IResultInfoProps) {
	return (
		<p className="ResultsInfo">
			Количество правильных ответов: {successCount} из {count}
		</p>
	);
}

export default ResultsInfo;
