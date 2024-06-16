/* eslint-disable react/prop-types */
import React from 'react';

import Input from './Input';
import formData from './formData';

function EducationItem(id) {
	// Add education object with ID
	const idExists = formData.education.some((element) => element.id === id);
	if (!idExists) {
		const educationObject = {
			id,
			schoolName: '',
			studyTitle: '',
			studyDate: '',
		};
		formData.education.push(educationObject);
	}

	return (
		<div>
			<Input
				title="School Name"
				formField="schoolName"
				subObject="education"
				subObjectId={id}
			/>
			<Input
				title="Title of study"
				formField="studyTitle"
				subObject="education"
				subObjectId={id}
			/>
			<Input
				title="Date of study"
				formField="studyDate"
				subObject="education"
				subObjectId={id}
			/>
			<button type="button">remove</button>
		</div>
	);
}

export default EducationItem;
