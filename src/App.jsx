import React from 'react';
import { Section } from './Section';

function App() {
	return (
		<>
			<Section title="General Information">
				<label>Name: </label>
				<input></input>
				<br />
				<label>Name: </label>
				<input></input>
				<br />
				<label>Name: </label>
				<input></input>
			</Section>
			<Section title="Education">
				-education item -school name -title of study -date of study
			</Section>
			<Section title="Professional Experience">
				-professional item -company name -position title -main responsabilities -start date
				-end date
			</Section>
		</>
	);
}

export default App;
