import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const BackButton = () => {
	const history = useHistory();

	const handleBack = () => {
		history.goBack();
	};

	return (
		<Button color="primary" onClick={handleBack} className="d-print-none">
			Back
		</Button>
	);
};

export default BackButton;
