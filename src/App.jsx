import React from 'react';
import { Section } from './Section';
import Input from './Input';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

function App() {
	return (
		<>
			<Section title="General Information">
				<Input title="Name" formField="name" />
				<Input title="Email" formField="email" />
				<Input title="Phone" formField="phone" />
			</Section>
			<Section title="Education">
				<EducationItem />
				<button type="button"> Add </button>
			</Section>
			<Section title="Professional Experience">
				<ExperienceItem />
				<button type="button"> Add </button>
			</Section>
			<br />
			<button type="submit">Submit all</button>
		</>
	);
}

export default App;
