import { useState } from "react";
import useSortedPosts from "../../hooks/useSortedPosts";
import { ACTION_TYPES } from "../../hooks/useSortedPosts";
import { Category } from "../../types/graphql";

import styles from "./Categories.module.scss";

/**
 * Categories Component
 * @author Brian Whelan
 *
 * @returns The list of post categories
 */

const Categories: React.FC = () => {
	const { state, dispatch } = useSortedPosts();

	const [showCategories, setShowCategories] = useState<boolean>(false);

	const handleCategorySelectClick = () => setShowCategories(!showCategories);

	const handleCategoryClick = (category: Category) => {
		dispatch({
			type: ACTION_TYPES.filterByCategory,
			payload: {
				slug: category?.slug,
				currentCategory: category?.name,
			},
		});
	};

	const handleAllPostClick = () => {
		dispatch({
			type: ACTION_TYPES.showAllPosts,
			payload: {
				offset: 0,
				currentCategory: "All Posts",
			},
		});
	};

	return (
		<>
			<div className={`${styles["category-select"]} ${showCategories ? styles.active : ""}`}>
				<p>
					Show me <span onClick={handleCategorySelectClick}>{state.currentCategory}</span>
				</p>
			</div>
			{showCategories && (
				<ul className={styles.categories}>
					<li
						onClick={handleAllPostClick}
						className={state.currentCategory === "All Posts" ? styles.current : ""}
					>
						All Posts
					</li>
					{state?.categories.map((category: Category) => (
						<li
							className={state.currentCategory === category?.name ? styles.current : ""}
							key={category.id}
							onClick={() => handleCategoryClick(category)}
						>
							{category?.name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Categories;
