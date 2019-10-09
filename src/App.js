import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import QuestionPage from './components/QuestionPage/QuestionPage';
import ResultsPage from './components/ResultsPage/ResultsPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/" component={WelcomePage} exact />
					<Route path="/questions/:index" component={QuestionPage} exact />
					<Route path="/results" component={ResultsPage} exact />
					<Route path="*" component={NotFoundPage} />
				</Switch>

				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
