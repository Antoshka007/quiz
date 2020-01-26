import './ProjectInfoList.css';
import React from 'react';

function ProjectInfoList() {
	const dependencies = [
		{ name: 'Create React App', version: '3.3.0' },
		{ name: 'React', version: '16.12.0' },
		{ name: 'ReactDOM', version: '16.12.0' },
		{ name: 'React Router DOM', version: '5.1.2' },
		{ name: 'Redux', version: '4.0.5' },
		{ name: 'React Redux', version: '7.1.3' },
		{ name: 'Redux Actions', version: '2.6.5' },
		{ name: 'Typescript', version: '3.7.5' },
		{ name: 'Git', version: '2.21.0' },
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
