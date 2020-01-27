import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { IAppProps, IAppMapStateProps } from './App.types';
import { IState } from '../../store/store.typings';
import { getPage } from '../../modules/pages';

class App extends React.Component<IAppProps> {
	renderPage() {
		const { page } = this.props;
		const parsedPage = page.split('/');
		const firstLevel = parsedPage[1];
		const secondLevel = Number(parsedPage[2]);

		if (firstLevel === '') {
			return <WelcomePage />;
		} else if (firstLevel === 'questions') {
			return <QuestionPage number={secondLevel} />;
		} else if (firstLevel === 'results') {
			return <ResultsPage />;
		}

		return <NotFoundPage />;
	}

	render() {
		return (
			<React.Fragment>
				{this.renderPage()}
				<Footer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IState): IAppMapStateProps => ({
	page: getPage(state),
});

export default connect(mapStateToProps)(App);
