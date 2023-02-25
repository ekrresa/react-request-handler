import * as React from 'react';
import classes from './spinner.module.css';

interface Props {
	size?: number;
	color?: string;
}
export function Spinner({ size = 40, color = '#000000' }: Props) {
	return (
		<div
			className={classes.spinner}
			style={{
				width: size,
				color,
			}}
		></div>
	);
}
