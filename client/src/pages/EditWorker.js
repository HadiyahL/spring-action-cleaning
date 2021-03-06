import React from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import CreateWorkerForm from "../components/Workers/CreateWorkerForm";
import { Spinner, Title } from "../components";
import useFetch from "../hooks/useFetch";

const EditWorker = () => {
	const { id } = useParams();
	const { data, isLoading, error } = useFetch(`/workers/${id}`);
	if (error) {
		return <div>Oops, something went wrong.</div>;
	} else if (isLoading) {
		return <Spinner />;
	} else {
		const {
			name,
			email,
			address,
			phone_number,
			whatsapp,
			permanent_contract,
			languages,
			archived,
			id,
		} = data.workers[0];

		return (
			<Container>
				<Title text="Edit cleaner" />
				<CreateWorkerForm
					name={name}
					email={email}
					address={address}
					phone={phone_number}
					whatsapp={whatsapp}
					contract={permanent_contract}
					languages={languages}
					archived={archived}
					worker_id={id}
				/>
			</Container>
		);
	}
};

export default EditWorker;
