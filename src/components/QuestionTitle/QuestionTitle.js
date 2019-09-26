import './QuestionTitle.css';
import React from 'react';
import PropTypes from 'prop-types';

function QuestionTitle({ children }) {
	return <p className="QuestionTitle">{children}</p>;
}

QuestionTitle.propTypes = {
	children: PropTypes.string.isRequired,
};

export default QuestionTitle;
