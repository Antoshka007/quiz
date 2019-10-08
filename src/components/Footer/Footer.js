import './Footer.css';
import React from 'react';
import Modal from '../Modal/Modal';
import ProjetInfoList from '../ProjectInfoList/ProjectInfoList';

class Footer extends React.Component {
	state = { isModalOpened: false };

	btnClickHandler = () => {
		this.setState({ isModalOpened: true });
	};

	onModalClose = () => {
		this.setState({ isModalOpened: false });
	};

	render() {
		const { isModalOpened } = this.state;

		return (
			<footer className="Footer">
				<button className="Footer__btn" onClick={this.btnClickHandler}>
					Created by Antoshka
				</button>
				<Modal isOpened={isModalOpened} onClose={this.onModalClose} title="Информация о проекте">
					<ProjetInfoList />
				</Modal>
			</footer>
		);
	}
}

export default Footer;
