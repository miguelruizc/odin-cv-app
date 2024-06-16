/* eslint-disable react/prop-types */
import React from 'react';

import Input from './Input';
import formData from './formData';

function EducationItem({ id, parentSetter }) {
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

	const remove = () => {
		// remove from form data
		const index = formData.education.findIndex((element) => element.id === id);
		formData.education.splice(index, 1);

		// remove from parent
		parentSetter((prevState) => prevState.filter((element) => element.key !== id));
	};

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
			<button type="button" onClick={remove}>
				remove
			</button>
		</div>
	);
}

export default EducationItem;
