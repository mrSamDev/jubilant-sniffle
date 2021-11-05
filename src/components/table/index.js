import React, { Fragment } from "react";

import { Cell, Row, Head, Table, Container, Body, Pagination } from "../shared/table";

import { useTable, usePagination } from "react-table";

import makeData from "./makeData";

import { getPaginationProps } from "./utils";

function TableVisualization({ columns, data }) {
	const table = useTable({ columns, data }, usePagination);
	const { getTableProps, headerGroups, page, prepareRow } = table;
	return (
		<Fragment>
			<Container sticky>
				<Table stickyHeader {...getTableProps()}>
					<Head>
						{headerGroups.map((headerGroup) => (
							<Row {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<Cell {...column.getHeaderProps()}>{column.render("Header")}</Cell>
								))}
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
			<Pagination {...getPaginationProps(table)} />
		</Fragment>
	);
}

function App() {
	const columns = React.useMemo(
		() => [
			{
				Header: "Name",
				columns: [
					{
						Header: "First Name",
						accessor: "firstName",
					},
					{
						Header: "Last Name",
						accessor: "lastName",
					},
				],
			},
			{
				Header: "Info",
				columns: [
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
			},
		],
		[]
	);

	const data = React.useMemo(() => makeData(20), []);

	return <TableVisualization columns={columns} data={data} />;
}

export default App;
