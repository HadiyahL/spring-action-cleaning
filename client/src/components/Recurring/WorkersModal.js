import React from "react";
import PropTypes from "prop-types";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ListGroup,
	ListGroupItem,
	Button,
} from "reactstrap";
import FilterInput from "../UI/FilterInput";

const WorkersModal = ({
	isOpen,
	toggle,
	state,
	setState,
	id,
	workers,
	setWorkers,
}) => {
	const handleClick = (workerId, workerName) => {
		updateWorker(id, workerId, workerName);
		toggle();
	};

	const updateWorker = (jobId, workerId, workerName) => {
		const jobs = state.jobs.map((job) => {
			if (job.id === jobId) {
				job.worker_id = workerId;
				job.worker = workerName;
			}
			return job;
		});

		setState({
			...state,
			jobs,
		});
	};

	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggle}>
				<ModalHeader toggle={toggle}>Select cleaner</ModalHeader>
				<ModalBody>
					<FilterInput setData={setWorkers} filterBy="name" />
					<ListGroup>
						{workers.data.map((item) => {
							return (
								<ListGroupItem
									tag="button"
									action
									key={item.id}
									onClick={() => {
										handleClick(item.id, item.name);
									}}
								>
									{item.name || item.address}
								</ListGroupItem>
							);
						})}
					</ListGroup>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

WorkersModal.propTypes = {
	toggle: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	workers: PropTypes.object.isRequired,
	setWorkers: PropTypes.func.isRequired,
};

export default WorkersModal;
