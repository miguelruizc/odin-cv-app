/* eslint-disable react/prop-types */
export function Section({ title, children }) {
	return (
		<div>
			<h1>{title}</h1>
			{children}
		</div>
	);
}
