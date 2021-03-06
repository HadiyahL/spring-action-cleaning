import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CustomerReportContext = createContext([{}, () => {}]);

export const CustomerReportProvider = ({ children }) => {
	const [state, setState] = useState({
		customer: "All customers",
		customer_id: "",
		start_date: "",
		finish_date: "",
		detailed: true,
	});

	return (
		<CustomerReportContext.Provider value={[state, setState]}>
			{children}
		</CustomerReportContext.Provider>
	);
};

CustomerReportProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
