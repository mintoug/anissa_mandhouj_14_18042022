import React from "react";


 function SelectField({ label, name, list, value, setInput, actionOnChange }) {
	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index}>{item.label}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<select id={name} name={name} value={value} onChange={(e) => {
					setInput(parseInt(e.target.value));
				
				}}>
				{createOptionsState()}
			</select>
		</React.Fragment>
	);
}

export default SelectField