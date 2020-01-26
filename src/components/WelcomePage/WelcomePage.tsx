import './WelcomePage.css';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { IWelcomePageMapDispatchProps, IWelcomePageProps } from './WelcomePage.types';
import { setPage } from '../../modules/pages';

function WelcomePage({ setPage }: IWelcomePageProps) {
	const goToFirstQuestion = () => setPage('/questions/1');

	return (
		<div className="WelcomePage">
			<Title isBig={true}>Викторина</Title>

			<div className="WelcomePage__link-wrap">
				<Button onClick={goToFirstQuestion}>Начать!</Button>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch: Dispatch): IWelcomePageMapDispatchProps => ({
	setPage: (page) => dispatch(setPage(page)),
});

export default connect(null, mapDispatchToProps)(WelcomePage);
