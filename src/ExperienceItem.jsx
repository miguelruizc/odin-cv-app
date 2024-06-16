/* eslint-disable react/prop-types */
import React from 'react';
import Input from './Input';
import formData from './formData';

function ExperienceItem({ id, parentSetter }) {
	// Add experience object with ID
	const idExists = formData.experience.some((element) => element.id === id);
	if (!idExists) {
		const experienceObject = {
			id,
			companyName: '',
			position: '',
			responsibilities: '',
			startDate: '',
			endDate: '',
		};
		formData.experience.push(experienceObject);
	}

	const remove = () => {
		// remove from form data
		const index = formData.experience.findIndex((element) => element.id === id);
		formData.experience.splice(index, 1);

		// remove from parent
		parentSetter((prevState) => prevState.filter((element) => element.key !== id));
	};

	return (
		<div>
			<Input
				title="Company name"
				formField="companyName"
				subObject="experience"
				subObjectId={id}
			/>
			<Input
				title="Position title"
				formField="position"
				subObject="experience"
				subObjectId={id}
			/>
			<Input
				title="Main responsibilities"
				formField="responsibilities"
				subObject="experience"
				subObjectId={id}
			/>
			<Input
				title="Start date"
				formField="startDate"
				subObject="experience"
				subObjectId={id}
			/>
			<Input title="End date" formField="endDate" subObject="experience" subObjectId={id} />
			<button type="button" onClick={remove}>
				remove
			</button>
		</div>
	);
}

export default ExperienceItem;
