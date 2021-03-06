import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "reactstrap";
import BranchesTable from "./BranchesTable";

const Branches = ({ state, setState }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const handleClick = () => {
		// reset state for adding new branch
		setState({
			...state,
			address: "",
			duration: "1",
			contact_name: "",
			visit_time: "",
			details: "",
			contact_phone: "",
			branch_id: null,
			worker_id: null,
		});
		toggle();
	};

	return (
		<Row className="justify-content-center">
			<Col xs="12" sm="12" md="8" lg="6" xl="6">
				<BranchesTable
					state={state}
					toggleEditModal={toggle}
					setState={setState}
					isOpen={isOpen}
				/>
				<div className="d-flex justify-content-end">
					<Button onClick={handleClick}>Add New Address</Button>
				</div>
			</Col>
		</Row>
	);
};

Branches.propTypes = {
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
};

export default Branches;
