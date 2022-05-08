import React from "react";


 function SelectField(props) {
	const createOptionsState = () => {
		return props.list.map((item, index) => {
			return <option key={index} value={item.label}>{item.label}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={props.name}>{props.label}</label>
			<select  name={props.name}  onChange={props.onChange}>
				{createOptionsState()}
			</select>
		</React.Fragment>
	);
}

export default SelectField