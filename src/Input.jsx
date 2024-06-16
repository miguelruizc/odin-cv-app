/* eslint-disable react/prop-types */
import React from 'react';
import formData from './formData';

function Input({ title, formField, subObject, subObjectId }) {
	function updateForm(event) {
		if (subObject) {
			const object = formData[subObject].find((obj) => obj.id === subObjectId);
			object[formField] = event.target.value;
		} else {
			formData[formField] = event.target.value;
		}
	}

	return (
		<div className="formInput">
			<label htmlFor={`${title}Input`}>{title}</label>
			<input id={`${title}Input`} onChange={updateForm} />
		</div>
	);
}

export default Input;
