export function getPaginationProps(table) {
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
