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
import { Fragment, useState } from "react";
import TableSortLabel from "@mui/material/TableSortLabel";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Cell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
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

export function HeaderLabel(props) {
	const { sortEnabled } = props;
	if (!sortEnabled) return props.children;
	const { onClick, isSorted, isSortedDesc } = props;

	return (
		<TableSortLabel active={isSorted} direction={isSortedDesc ? "desc" : "asc"} onClick={onClick}>
			{props.children}
		</TableSortLabel>
	);
}

export function ColumnHiding(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	const { allColumns, onChange, indeterminate, checked } = props;

	return (
		<Fragment>
			<Button aria-describedby={id} onClick={handleClick}>
				Column Hiding
			</Button>

			<Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
				<Box style={{ padding: "5px 10px" }}>
					<FormControlLabel label="Toggle" control={<Checkbox checked={checked} indeterminate={Boolean(indeterminate)} onChange={onChange} />} />
					<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
						{allColumns.map((column) => {
							const { checked, onChange } = column.getToggleHiddenProps();
							return <FormControlLabel label={column.Header} control={<Checkbox checked={checked} onChange={onChange} />} />;
						})}
					</Box>
				</Box>
			</Popover>
		</Fragment>
	);
}
