import './Button.css';
import React from 'react';
import { IButtonProps } from './Button.types';

function Button({ children, onClick, className, isDisabled }: IButtonProps) {
	return (
		<button
			className={'Button' + (className ? ' ' + className : '')}
			onClick={onClick}
			disabled={!!isDisabled}
		>
			{children}
		</button>
	);
}

export default Button;
