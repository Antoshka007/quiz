import React from 'react';
import Result from './components/Results/Results';
import Test from './components/Test/Test';

const questions = [
	{
		id: '1',
		question: 'Выбери правильный ответ:',
		answers: [
			{ text: 'Первый вариант', id: '1' },
			{ text: 'Второй вариант', id: '2' },
			{ text: 'Третий вариант', id: '3' },
			{ text: 'Четвёртый вариант', id: '4' },
		],
		right: '1',
	},
	{
		id: '2',
		question: 'Выбери правильный ответ 2:',
		answers: [
			{ text: 'Первый вариант', id: '1' },
			{ text: 'Второй вариант', id: '2' },
			{ text: 'Третий вариант', id: '3' },
			{ text: 'Четвёртый вариант', id: '4' },
		],
		right: '2',
	},
	{
		id: '3',
		question: 'Выбери правильный ответ 3:',
		answers: [
			{ text: 'Первый вариант', id: '1' },
			{ text: 'Второй вариант', id: '2' },
			{ text: 'Третий вариант', id: '3' },
			{ text: 'Четвёртый вариант', id: '4' },
		],
		right: '3',
	},
];

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

		return <Test question={question} answers={questionAnswers} onAnswer={this.onAnswer} />;
	}
}

export default App;
