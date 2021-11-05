import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import config from "../../../constants/config";

export default function Page(props) {
	const title = `${props.title} || ${config.APP_NAME}`;
	return <Helmet>{title}</Helmet>;
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
};

Page.defaultProps = {
	title: "App",
};
