import './ProjectInfoList.css';
import React from 'react';

function ProjectInfoList() {
	const dependencies = [
		{ name: 'Create React App', version: '3.1.2' },
		{ name: 'React', version: '16.9.0' },
		{ name: 'ReactDOM', version: '16.9.0' },
		{ name: 'React Router DOM', version: '5.1.2' },
		{ name: 'Redux', version: '4.0.4' },
		{ name: 'React Redux', version: '7.1.1' },
		{ name: 'PropTypes', version: '15.7.2' },
		{ name: 'Git', version: '2.16.2' },
	];

	return (
		<ul className="ProjectInfoList">
			{dependencies.map(d => (
				<li className="ProjectInfoList__item" key={d.name}>
					<span className="ProjectInfoList__item-title">{d.name}</span>
					<span className="ProjectInfoList__item-version">{d.version}</span>
				</li>
			))}
		</ul>
	);
}

export default ProjectInfoList;
