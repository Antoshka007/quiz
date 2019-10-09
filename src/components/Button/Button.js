import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, className, isDisabled }) {
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

Button.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Button;
