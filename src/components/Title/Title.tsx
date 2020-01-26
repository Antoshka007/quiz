import './Title.css';
import React from 'react';
import { ITitleProps } from './Title.types';

function Title({ children, isBig }: ITitleProps) {
	return <h1 className={`Title${isBig ? ' Title--big' : ''}`}>{children}</h1>;
}

export default Title;
