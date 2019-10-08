import './ProjectInfoList.css';
import React from 'react';

function ProjectInfoList() {
	return (
		<ul className="ProjectInfoList">
			<li className="ProjectInfoList__item">
				<span className="ProjectInfoList__item-title">Create React App</span>
				<span className="ProjectInfoList__item-version">3.1.2</span>
			</li>
			<li className="ProjectInfoList__item">
				<span className="ProjectInfoList__item-title">React</span>
				<span className="ProjectInfoList__item-version">16.9.0</span>
			</li>
			<li className="ProjectInfoList__item">
				<span className="ProjectInfoList__item-title">ReactDOM</span>
				<span className="ProjectInfoList__item-version">16.9.0</span>
			</li>
			<li className="ProjectInfoList__item">
				<span className="ProjectInfoList__item-title">PropTypes</span>
				<span className="ProjectInfoList__item-version">15.7.2</span>
			</li>
			<li className="ProjectInfoList__item">
				<span className="ProjectInfoList__item-title">Git</span>
				<span className="ProjectInfoList__item-version">2.16.2</span>
			</li>
		</ul>
	);
}

export default ProjectInfoList;
