import React from 'react';
import Result from './components/Results/Results';
import Test from './components/Test/Test';
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

		if (userAnswers.length === questions.length) {
			return <Result questions={questions} userAnswers={userAnswers} onClickBtn={this.onRestart} />;
		}

		const { question, answers: questionAnswers } = questions[userAnswers.length];

		return (
			<Test
				question={question}
				answers={questionAnswers}
				onAnswer={this.onAnswer}
				index={userAnswers.length + 1}
				count={questions.length}
			/>
		);
	}
}

export default App;
