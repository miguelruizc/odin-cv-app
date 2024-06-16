/* eslint-disable react/prop-types */
import React from 'react';

export function Section({ title, children }) {
	return (
		<div className="section">
			<h1>{title}</h1>
			{children}
		</div>
	);
}

export default Section;
