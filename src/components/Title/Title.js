import './Title.css';
import React from 'react';
import PropTypes from 'prop-types';

function Title({ children, isBig }) {
	return <h1 className={`Title${isBig ? ' Title--big' : ''}`}>{children}</h1>;
}

Title.propTypes = {
	isBig: PropTypes.bool,
};

export default Title;
