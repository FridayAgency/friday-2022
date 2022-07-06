import { useEffect, useRef } from "react";
import { Menu as MenuType } from "../../../types/graphql";
import Menu from "../Menu";

import { gsap } from "gsap";

import styles from "./MobileExpandedMenu.module.scss";

/**
 * @author Brian Whelan
 *
 * @param {object} menu an array containing the menu data
 * @param {string} className The classname for the menu
 * @param {Boolean} showMenu The showmenu state to toggle menu
 * @param {React.SetStateAction} setShowMenu The set state function to show and hide menu
 * @returns The mobile expanded menu animated with gsap Timeline
 */
interface MobileExpandedMenuProps {
	className?: string;
	showMenu: Boolean;
	menu: MenuType;
	setShowMobile: React.Dispatch<React.SetStateAction<Boolean>>;
}

const MobileExpandedMenu: React.FC<MobileExpandedMenuProps> = ({
	menu,
	className,
	showMenu,
	setShowMobile,
}) => {
	const tl = useRef<GSAPTimeline>(null!);

	const expandedMenuRef = useRef<HTMLDivElement>(null!);
	const circleRef = useRef<HTMLDivElement>(null!);
	const backgroundRef = useRef<HTMLDivElement>(null!);
	const menuRef = useRef<HTMLDivElement>(null!);
	const closeOneRef = useRef<HTMLSpanElement>(null!);
	const closeTwoRef = useRef<HTMLSpanElement>(null!);

	const handleClick = () => tl.current.reverse();
	const onceReversed = () => setShowMobile(!showMenu);

	useEffect(() => {
		tl.current = gsap
			.timeline({ paused: true, onReverseComplete: onceReversed })
			.to(expandedMenuRef.current, { display: "block", duration: 0.05 })
			.to(
				circleRef.current,
				{
					width: "150vh",
					height: "150vh",
					x: "20%",
					y: "-20%",
					duration: 0.75,
				},
				"-.05"
			)
			.to(backgroundRef.current, { opacity: 1, duration: 0.75 }, "-=0.75")
			.to(menuRef.current, { opacity: 1, display: "block", duration: 0.3 }, 0.1)
			.to(closeOneRef.current, { rotation: 45, opacity: 1, duration: 0.3 })
			.to(closeTwoRef.current, { rotation: -45, opacity: 1, duration: 0.3 }, "-=0.3");

		if (showMenu === true) {
			tl.current.play();
		}
	}, [showMenu]);

	return (
		<div ref={expandedMenuRef} className={styles["expanded-menu"]}>
			<div ref={circleRef} className={styles.circle}></div>
			<div ref={backgroundRef} className={styles.background}></div>
			<div onClick={handleClick} className={styles.close}>
				<span ref={closeOneRef} className={styles.close1}></span>
				<span ref={closeTwoRef} className={styles.close2}></span>
			</div>
			<div ref={menuRef} className={styles.menu}>
				<Menu menu={menu} className={className} />
			</div>
		</div>
	);
};

export default MobileExpandedMenu;
