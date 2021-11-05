export function preparePagination(table) {
	const {
		pageCount: count,
		gotoPage,
		setPageSize,
		state: { pageIndex: page, pageSize: rowsPerPage },
	} = table;

	return {
		page,
		count: count * rowsPerPage,
		rowsPerPage,
		onPageChange(_, newPage) {
			gotoPage(newPage);
		},
		onRowsPerPageChange(event) {
			setPageSize(+event.target.value);
			gotoPage(0);
		},
	};
}

export function prepareCell(column) {
	const { onClick, ...cell } = column;
	const label = { onClick, ...column };
	return {
		cell,
		label,
	};
}
