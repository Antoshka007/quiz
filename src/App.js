import React from 'react';
import Result from './components/Results/Results';
import Test from './components/Test/Test';
import Footer from './components/Footer/Footer';
import questions from './data';

class App extends React.Component {
	state = {
		answers: [],
	};

	onAnswer = id => {
		this.setState(state => ({ answers: [...state.answers, id] }));
	};

	onRestart = () => {
		this.setState({ answers: [] });
	};

	render() {
		const { answers: userAnswers } = this.state;
		const { question, answers: questionAnswers } = questions[userAnswers.length] || {};
		const isFinished = userAnswers.length === questions.length;

		return (
			<React.Fragment>
				{isFinished ? (
					<Result questions={questions} userAnswers={userAnswers} onClickBtn={this.onRestart} />
				) : (
					<Test
						question={question}
						answers={questionAnswers}
						onAnswer={this.onAnswer}
						index={userAnswers.length + 1}
						count={questions.length}
					/>
				)}

				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
