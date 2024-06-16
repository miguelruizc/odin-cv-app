import { React, useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from './Section';
import Input from './Input';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import formData from './formData';

function App() {
	const [isEditable, setIsEditable] = useState(true);
	const [educationItems, setEducationItems] = useState([]);
	const [experienceItems, setExperienceItems] = useState([]);

	const addEducationItem = () => {
		const uniqueId = uuidv4();
		setEducationItems((prevState) => [
			...prevState,
			<EducationItem key={uniqueId} id={uniqueId} parentSetter={setEducationItems} />,
		]);
	};

	const addExperienceItem = () => {
		const uniqueId = uuidv4();
		setExperienceItems((prevState) => [
			...prevState,
			<ExperienceItem key={uniqueId} id={uniqueId} parentSetter={setExperienceItems} />,
		]);
	};

	const submit = () => {
		setIsEditable(false);
	};

	const edit = () => {
		setIsEditable(true);
	};

	const editable = () => {
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
				<button type="submit" onClick={submit}>
					Submit all
				</button>
			</>
		);
	};

	const printable = () => {
		const educationItemsPrintable = formData.education.map((element) => {
			return (
				<Fragment key={element.id}>
					<p>School name: </p>
					<p>{element.schoolName}</p>
					<p>Title of study: </p>
					<p>{element.studyTitle}</p>
					<p>Date of study: </p>
					<p>{element.studyDate}</p>
				</Fragment>
			);
		});

		const experienceItemsPrintable = formData.experience.map((element) => {
			return (
				<Fragment key={element.id}>
					<p>Company name: </p>
					<p>{element.companyName}</p>
					<p>Position title: </p>
					<p>{element.position}</p>
					<p>Main responsibilities: </p>
					<p>{element.responsibilities}</p>
					<p>Start date: </p>
					<p>{element.startDate}</p>
					<p>End date: </p>
					<p>{element.endDate}</p>
				</Fragment>
			);
		});

		return (
			<>
				<Section title="General Information">
					<p>Name: </p>
					<p>{formData.name}</p>
					<p>Email: </p>
					<p>{formData.email}</p>
					<p>Phone: </p>
					<p>{formData.phone}</p>
				</Section>
				<Section title="Education">{educationItemsPrintable}</Section>
				<Section title="Professional Experience">{experienceItemsPrintable}</Section>
				<br />
				<button type="submit" onClick={edit}>
					Edit
				</button>
			</>
		);
	};

	if (isEditable) return editable();
	return printable();
}

export default App;
