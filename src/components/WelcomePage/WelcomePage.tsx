import './WelcomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import Button from '../Button/Button';

function WelcomePage() {
	return (
		<div className="WelcomePage">
			<Title isBig={true}>Викторина</Title>

			<div className="WelcomePage__link-wrap">
				<Link to="/questions/1">
					<Button>Начать!</Button>
				</Link>
			</div>
		</div>
	);
}

export default WelcomePage;
