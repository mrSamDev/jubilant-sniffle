import React, { Fragment } from "react";

import { Cell, Row, Head, Table, Container, Body, Pagination, HeaderLabel } from "../shared/table";

import { useTable, usePagination, useSortBy } from "react-table";

import makeData from "./makeData";

import { preparePagination, prepareCell } from "./utils";

function TableVisualization({ columns, data }) {
	const table = useTable({ columns, data }, useSortBy, usePagination);
	const { getTableProps, headerGroups, page, prepareRow } = table;
	return (
		<Fragment>
			<Container sticky>
				<Table stickyHeader {...getTableProps()}>
					<Head>
						{headerGroups.map((headerGroup) => (
							<Row {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									const { label, cell } = prepareCell(column.getHeaderProps(column.getSortByToggleProps()));
									return (
										<Cell {...cell}>
											<HeaderLabel sortEnabled {...label}>
												{column.render("Header")}
											</HeaderLabel>
										</Cell>
									);
								})}
							</Row>
						))}
					</Head>
					<Body>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<Row {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>;
									})}
								</Row>
							);
						})}
					</Body>
				</Table>
			</Container>
			<Pagination {...preparePagination(table)} />
		</Fragment>
	);
}

function App() {
	const columns = React.useMemo(
		() => [
			{
				Header: "Age",
				accessor: "age",
			},
			{
				Header: "Visits",
				accessor: "visits",
			},
			{
				Header: "Status",
				accessor: "status",
			},
			{
				Header: "Profile Progress",
				accessor: "progress",
			},
		],

		[]
	);

	const data = React.useMemo(() => makeData(20), []);

	return <TableVisualization columns={columns} data={data} />;
}

export default App;
