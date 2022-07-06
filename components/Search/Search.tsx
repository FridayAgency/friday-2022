import Image from "next/image";
import React, { forwardRef, HtmlHTMLAttributes } from "react";

import styles from "./Search.module.scss";

interface SearchProps {
	onClick: (e: React.FormEvent) => Promise<void>;
}

const Search = forwardRef<HTMLInputElement, SearchProps>(({ onClick }, ref) => {
	return (
		<div className={styles.search}>
			<label htmlFor="search">Search</label>
			<form onSubmit={onClick}>
				<input ref={ref} type="search" name="search" placeholder="Search..." />
				<input type="submit" value="" />

				<div className={styles["search-image"]}>
					<Image
						src="/images/magnifying-glass--grey.svg"
						alt="Search Button"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</form>
		</div>
	);
});

export default Search;
