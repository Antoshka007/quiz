import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { fetchQuestionsRequest } from '../../modules/questions';
import Footer from '../Footer/Footer';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../Loader/Loader';
import AppError from '../AppError/AppError';
import { getQuestionsIsLoading, getQuestionsError } from '../../modules/questions';
import { IAppProps } from './App.types';
import { IState } from '../../store/store.typings';

class App extends React.Component<IAppProps> {
	componentDidMount() {
		const { fetchQuestionsRequest } = this.props;

		fetchQuestionsRequest();
	}

	render() {
		const { questionsIsLoading, questionsError } = this.props;

		return (
			<React.Fragment>
				{questionsIsLoading ? (
					<Loader />
				) : questionsError ? (
					<AppError>Что-то пошло не так...</AppError>
				) : (
					<Switch>
						<Route path="/" component={WelcomePage} exact />
						<Route path="/questions/:index" component={QuestionPage} exact />
						<Route path="/results" component={ResultsPage} exact />
						<Route path="*" component={NotFoundPage} />
					</Switch>
				)}

				<Footer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IState) => ({
	questionsIsLoading: getQuestionsIsLoading(state),
	questionsError: getQuestionsError(state),
});
const mapDispatchToPtops = (dispatch: Dispatch) => {
	return {
		fetchQuestionsRequest: () => dispatch(fetchQuestionsRequest()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToPtops
)(App);
