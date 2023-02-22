import * as React from 'react';
import './styles.css';

interface Props {
	size?: number;
	color?: string;
}
export function Spinner({ size = 40, color = '#000000' }: Props) {
	return (
		<div
			className="spinner"
			style={{
				width: size,
				color,
			}}
		></div>
	);
}
