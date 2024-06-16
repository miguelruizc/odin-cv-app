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
					<div className="card">
						<Input title="Name" formField="name" />
						<Input title="Email" formField="email" />
						<Input title="Phone" formField="phone" />
					</div>
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
				<button type="submit" onClick={submit}>
					Submit all
				</button>
			</>
		);
	};

	const printable = () => {
		const educationItemsPrintable = formData.education.map((element) => {
			return (
				<div key={element.id} className="card">
					<div className="formInput">
						<p>School name: </p>
						<div className="fakeInput">
							<p>{element.schoolName}</p>
						</div>
					</div>
					<div className="formInput">
						<p>Title of study: </p>
						<div className="fakeInput">
							<p>{element.studyTitle}</p>
						</div>
					</div>
					<div className="formInput">
						<p>Date of study: </p>
						<div className="fakeInput">
							<p>{element.studyDate}</p>
						</div>
					</div>
				</div>
			);
		});

		const experienceItemsPrintable = formData.experience.map((element) => {
			return (
				<div key={element.id} className="card">
					<div className="formInput">
						<p>Company name: </p>
						<div className="fakeInput">
							<p>{element.companyName}</p>
						</div>
					</div>
					<div className="formInput">
						<p>Position title: </p>
						<div className="fakeInput">
							<p>{element.position}</p>
						</div>
					</div>
					<div className="formInput">
						<p>Main responsibilities: </p>
						<div className="fakeInput">
							<p>{element.responsibilities}</p>
						</div>
					</div>
					<div className="formInput">
						<p>Start date: </p>
						<div className="fakeInput">
							<p>{element.startDate}</p>
						</div>
					</div>
					<div className="formInput">
						<p>End date: </p>
						<div className="fakeInput">
							<p>{element.endDate}</p>
						</div>
					</div>
				</div>
			);
		});

		return (
			<>
				<Section title="General Information">
					<div className="card">
						<div className="formInput">
							<p>Name: </p>
							<div className="fakeInput">
								<p>{formData.name}</p>
							</div>
						</div>
						<div className="formInput">
							<p>Email: </p>
							<div className="fakeInput">
								<p>{formData.email}</p>
							</div>
						</div>
						<div className="formInput">
							<p>Phone: </p>
							<div className="fakeInput">
								<p>{formData.phone}</p>
							</div>
						</div>
					</div>
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
