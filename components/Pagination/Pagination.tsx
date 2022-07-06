import useSortedPosts, { ACTION_TYPES } from "../../hooks/useSortedPosts";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = (): JSX.Element => {
	const { state, dispatch } = useSortedPosts();

	const handlePaginationClick = (event) => {
		const selectedPage = event.selected;

		dispatch({
			type: ACTION_TYPES.changePage,
			payload: {
				offset: selectedPage * state.postsPerPage,
			},
		});
	};

	return (
		<div>
			{state.paginatedPosts && state.paginatedPosts.length > 0 && (
				<ReactPaginate
					previousLabel={"Prev"}
					nextLabel={"Next"}
					breakLabel={"..."}
					breakClassName={styles.break}
					pageCount={state.pageCount}
					marginPagesDisplayed={1}
					pageRangeDisplayed={3}
					onPageChange={handlePaginationClick}
					containerClassName={styles.pagination}
					activeClassName={styles.active}
					previousClassName={styles.previous}
					nextClassName={styles.next}
					disabledClassName={styles.disabled}
					forcePage={state.offset / state.postsPerPage}
				/>
			)}
		</div>
	);
};

export default Pagination;
