import * as React from 'react';
import './styles.css';

export const Spinner = ({ size = 40, color = '#000000' }) => {
	return (
		<div
			className="spinner"
			style={{
				width: size,
				color,
			}}
		></div>
	);
};
