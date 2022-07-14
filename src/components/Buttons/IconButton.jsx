import React from "react";
import propTypes from "prop-types";
import { DelButton } from "./ButtonStyle";

export const IconButton = ({ children, onClick, ...allyProps }) => {
	return (
		<DelButton type="button" onClick={onClick} {...allyProps}>
			{children}
		</DelButton>
	);
};

IconButton.defaultProps = {
	onClick: () => null,
	children: null,
};

IconButton.propTypes = {
	children: propTypes.node.isRequired,
	onClick: propTypes.func.isRequired,
	"aria-label": propTypes.string.isRequired,
};