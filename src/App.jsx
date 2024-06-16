import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from './Section';
import Input from './Input';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

function App() {
	const [educationItems, setEducationItems] = useState([]);
	const [experienceItems, setExperienceItems] = useState([]);

	const addEducationItem = () => {
		const uniqueId = uuidv4();
		setEducationItems((prevState) => [
			...prevState,
			<EducationItem key={uniqueId} id={uniqueId} />,
		]);
	};

	const addExperienceItem = () => {
		const uniqueId = uuidv4();
		setExperienceItems((prevState) => [
			...prevState,
			<ExperienceItem parentSetter={setExperienceItems} key={uniqueId} id={uniqueId} />,
		]);
	};

	return (
		<>
			<Section title="General Information">
				<Input title="Name" formField="name" />
				<Input title="Email" formField="email" />
				<Input title="Phone" formField="phone" />
			</Section>
			<Section title="Education">
				{educationItems}
				<button type="button" onClick={addEducationItem}>
					Add
				</button>
			</Section>
			<Section title="Professional Experience">
				{experienceItems}
				<button type="button" onClick={addExperienceItem}>
					Add
				</button>
			</Section>
			<br />
			<button type="submit">Submit all</button>
		</>
	);
}

export default App;
