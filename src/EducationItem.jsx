import React from 'react';
import Input from './Input';

function EducationItem() {
	return (
		<div>
			<Input title="School Name" />
			<Input title="Title of study" />
			<Input title="Date of study" />
			<button type="button">Remove</button>
		</div>
	);
}

export default EducationItem;
