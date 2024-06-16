import React from 'react';
import Input from './Input';

function ExperienceItem() {
	return (
		<div>
			<Input title="Company name" />
			<Input title="Position title" />
			<Input title="Main responsibilities" />
			<Input title="Start date" />
			<Input title="End date" />
		</div>
	);
}

export default ExperienceItem;
