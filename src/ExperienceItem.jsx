import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import formData from './formData';

function ExperienceItem() {
	const [id] = useState(uuidv4());

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
			<button type="button">remove</button>
		</div>
	);
}

export default ExperienceItem;
