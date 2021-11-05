import { Helmet } from "react-helmet";
import { Fragment } from "react";
import PropTypes from "prop-types";
import config from "../../../constants/config";

export default function Page(props) {
	const title = `${props.title} || ${config.APP_NAME}`;
	return (
		<Fragment>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{props.children}
		</Fragment>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
};

Page.defaultProps = {
	title: "App",
};
