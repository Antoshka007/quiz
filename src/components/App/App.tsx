import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchQuestionsRequest } from '../../modules/questions';
import Footer from '../Footer/Footer';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../Loader/Loader';
import AppError from '../AppError/AppError';
import { getQuestionsIsLoading, getQuestionsError } from '../../modules/questions';
import { IAppProps, IAppMapStateProps, IAppMapDispatchProps } from './App.types';
import { IState } from '../../store/store.typings';
import { getPage } from '../../modules/pages';

class App extends React.Component<IAppProps> {
	componentDidMount() {
		const { fetchQuestionsRequest } = this.props;

		fetchQuestionsRequest();
	}

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
		const { questionsIsLoading, questionsError } = this.props;

		return (
			<React.Fragment>
				{questionsIsLoading ? (
					<Loader />
				) : questionsError ? (
					<AppError>Что-то пошло не так...</AppError>
				) : this.renderPage()}

				<Footer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IState): IAppMapStateProps => ({
	questionsIsLoading: getQuestionsIsLoading(state),
	questionsError: getQuestionsError(state),
	page: getPage(state),
});
const mapDispatchToPtops = (dispatch: Dispatch): IAppMapDispatchProps => {
	return {
		fetchQuestionsRequest: () => dispatch(fetchQuestionsRequest()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToPtops
)(App);
