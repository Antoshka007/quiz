import './AppError.css';
import React from 'react';
import PropTypes from 'prop-types';

function AppError({ children }) {
	return <div className="AppError">{children}</div>;
}

AppError.propTypes = {
	children: PropTypes.string.isRequired,
};

export default AppError;
