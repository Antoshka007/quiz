import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';

const modalRoot = document.querySelector('.modal-root');

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('section');
		this.el.className = 'Modal';
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render() {
		const { isOpened, onClose, title, children } = this.props;

		this.el.classList.toggle('Modal--opened', isOpened);

		return ReactDOM.createPortal(
			<div className="Modal__inner">
				<h2 className="Modal__title">{title}</h2>
				<div className="Modal__content">{children}</div>
				<footer className="Modal__footer">
					<Button onClick={onClose}>Ок</Button>
				</footer>
			</div>,
			this.el
		);
	}
}

export default Modal;
