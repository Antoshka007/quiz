import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import { IModalProps } from './Modal.types';

const modalRoot = document.querySelector('.modal-root') as Element;

class Modal extends React.Component<IModalProps> {
	el = document.createElement('section');

	constructor(props: IModalProps) {
		super(props);
		this.el.className = 'Modal';
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
		this.el.addEventListener('click', this.overlayClickHandler);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
		this.el.removeEventListener('click', this.overlayClickHandler);
	}

	overlayClickHandler = (e: MouseEvent) => {
		const { onClose } = this.props;

		if (e.target === this.el) {
			onClose();
		}
	};

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
