/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import formData from './formData';

function Input({ title, formField, subObject, subObjectId }) {
	// Get corresponding form value
	let currentValue = '';
	if (subObject) {
		const object = formData[subObject].find((obj) => obj.id === subObjectId);
		currentValue = object[formField];
	} else {
		currentValue = formData[formField];
	}

	const [inputText, setInputText] = useState(currentValue);

	function updateForm(event) {
		if (subObject) {
			const object = formData[subObject].find((obj) => obj.id === subObjectId);
			object[formField] = event.target.value;
			setInputText(event.target.value);
		} else {
			formData[formField] = event.target.value;
			setInputText(event.target.value);
		}
	}

	return (
		<div className="formInput">
			<label htmlFor={`${title}Input`}>{title}</label>
			<input type="text" value={inputText} id={`${title}Input`} onChange={updateForm} />
		</div>
	);
}

export default Input;
