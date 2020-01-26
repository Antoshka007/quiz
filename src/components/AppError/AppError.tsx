import './AppError.css';
import React from 'react';
import { IAppErrorProps } from './AppError.types';

function AppError({ children }: IAppErrorProps) {
	return <div className="AppError">{children}</div>;
}

export default AppError;
