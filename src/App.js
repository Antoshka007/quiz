import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchQuestionsRequest } from './modules/questions';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import QuestionPage from './components/QuestionPage/QuestionPage';
import ResultsPage from './components/ResultsPage/ResultsPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Loader from './components/Loader/Loader';
import AppError from './components/AppError/AppError';

class App extends React.Component {
	componentDidMount() {
		const { fetchQuestionsRequest } = this.props;

		fetchQuestionsRequest();
	}

	render() {
		const {
			questions: { isLoading, error },
		} = this.props;

		return (
			<React.Fragment>
				{isLoading ? (
					<Loader />
				) : error ? (
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

const mapStateToProps = state => state;
const mapDispatchToPtops = dispatch => {
	return {
		fetchQuestionsRequest: () => dispatch(fetchQuestionsRequest()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToPtops
)(App);
