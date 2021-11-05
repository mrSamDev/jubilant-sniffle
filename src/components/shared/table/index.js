import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import MaUTable from "@mui/material/Table";
import MaUTableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import { Fragment } from "react";

export const Cell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const Row = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

export const Head = TableHead;

export const Table = MaUTable;

export const Body = MaUTableBody;

export function Container({ height, children, sticky }) {
	let props = {};
	if (sticky) props = { sx: { maxHeight: height } };
	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer {...props}>{children}</TableContainer>
		</Paper>
	);
}

Container.propTypes = {
	height: PropTypes.number.isRequired,
};

Container.defaultProps = {
	height: 440,
};

export function Pagination(props) {
	return (
		<Fragment>
			<TablePagination component="div" {...props} />
		</Fragment>
	);
}
Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	onRowsPerPageChange: PropTypes.func.isRequired,
	rowsPerPageOptions: PropTypes.arrayOf([PropTypes.number]).isRequired,
};

Pagination.defaultProps = {
	page: 0,
	count: 100,
	rowsPerPage: 10,
	onPageChange: () => {},
	onRowsPerPageChange: () => {},
	rowsPerPageOptions: [10, 25, 100],
};
