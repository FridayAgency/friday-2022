import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useState, useRef } from "react";
import type { Menu as Menutype } from "../../../types/graphql";
import MenuItem from "../Menuitem/MenuItem";
import styles from "../Nav/Nav.module.scss";

/**
 * @author Brian Whelan
 *
 * @param {object} menu an array containing the menu data
 * @param {string} className The classname for the menu
 * @returns A navigation menu
 */

interface MenuProps {
	menu: Menutype;
	className?: string;
	ref?: React.MutableRefObject<HTMLUListElement>;
	showLogo?: boolean;
}

const Menu: React.FC<MenuProps> = ({ menu, className, ref, showLogo = false }) => {
	const menuItems = menu?.menuItems?.edges.filter((item) => !item.node.parentId);

	const [showSubmenu, setShowSubmenu] = useState<Boolean>(false);
	const menuItemHasChildrenStyles: string = styles["menu-item-has-children"];
	const menuItemHasChildrenActiveStyles: string = `${styles["menu-item-has-children"]} ${styles.show}`;

	const subMenuRef = useRef<HTMLUListElement>(null!);

	const outsideTouchListener = (e) => {
		if (e.target === subMenuRef.current) return;
		setShowSubmenu(!showSubmenu);
		removeTouchListener();
	};
	const removeTouchListener = () => {
		document.removeEventListener("touchstart", outsideTouchListener);
	};

	const handleMenuClick = (e) => {
		if (e.target.tagName.toLowerCase() === "a") return;
		document.addEventListener("touchstart", outsideTouchListener);
		setShowSubmenu(!showSubmenu);
	};

	const handleMouseOver = () => setShowSubmenu(true);

	const handleMouseLeave = () => setShowSubmenu(false);

	const router: NextRouter = useRouter();
	const linkPath: Array<string> = router.asPath
		.split("/")
		.filter((item: string) => item.length > 0);

	let currentPage: string;
	if (linkPath.length) currentPage = linkPath[linkPath.length - 1].replace(/-/g, " ");

	return (
		<ul ref={ref} className={className}>
			{showLogo && (
				<li className={styles["menu-item"]}>
					<Link href="/">
						<a>
							<Image
								src={"/images/friday_logo_mini-red.svg"}
								alt=""
								height={24}
								width={24}
								objectFit="contain"
							/>
						</a>
					</Link>
				</li>
			)}

			{menuItems?.map(({ node: item }) =>
				item.childItems.edges.length ? (
					<li
						onTouchEnd={handleMenuClick}
						onMouseOver={handleMouseOver}
						onMouseLeave={handleMouseLeave}
						className={`${
							!showSubmenu ? menuItemHasChildrenStyles : menuItemHasChildrenActiveStyles
						} ${styles["menu-item"]}`}
						key={item.id}
					>
						<span className={`${currentPage === item.label.toLowerCase() ? styles.active : ""} `}>
							{item.label}
						</span>
						<ul ref={subMenuRef} className={styles.submenu}>
							{item.childItems.edges.map((childItem) => (
								<MenuItem
									key={childItem.node.id}
									url={childItem.node.path}
									label={childItem.node.label}
									className={`${
										currentPage === childItem.node.label.toLowerCase() ? styles.active : ""
									} ${styles["submenu-item"]} `}
								/>
							))}
						</ul>
					</li>
				) : (
					<MenuItem
						key={item.id}
						url={item.path}
						label={item.label}
						className={`${currentPage === item.label.toLowerCase() ? styles.active : ""} ${
							styles["menu-item"]
						}`}
					/>
				)
			)}
		</ul>
	);
};

export default Menu;
