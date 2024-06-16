/* eslint-disable react/prop-types */
import React from 'react';

function Input({ title }) {
	return (
		<div className="formInput">
			<label htmlFor={`${title}Input`}>{title}</label>
			<input id={`${title}Input`} />
		</div>
	);
}

export default Input;
