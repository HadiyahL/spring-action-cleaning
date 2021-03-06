import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormText } from "reactstrap";

const SelectDateU = ({
	state,
	setState,
	error,
	dateAttribute,
	attributeTitle,
}) => {
	const handleChange = (e) => {
		setState({
			...state,
			[dateAttribute]: e.target.value,
		});
	};

	return (
		<div
			className={
				dateAttribute === "start_date"
					? "w-100 mr-sm-3 mr-md-5"
					: "w-100 ml-sm-3 ml-md-5"
			}
		>
			<FormGroup>
				<Label for={dateAttribute} size="lg">
					{attributeTitle}
				</Label>
				<Input
					invalid={!!error}
					type="date"
					name={dateAttribute}
					id={dateAttribute}
					value={state[dateAttribute]}
					onChange={handleChange}
					placeholder="DD-MM-YYYY"
					required
				/>
				{error && <FormText color="danger">{error}</FormText>}
			</FormGroup>
		</div>
	);
};

SelectDateU.propTypes = {
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	error: PropTypes.string,
	dateAttribute: PropTypes.string,
	attributeTitle: PropTypes.string,
};

export default SelectDateU;
