import Link from "next/link";

/**
 * Menu Item Component
 *
 * @author Brian Whelan
 *
 * @param {string} url The url of the menu item
 * @param {string} label The label of the
 * @returns A menu Item Link
 */

interface MenuItemProps {
	url: string;
	label: string;
	className?: string;
}

const MenuItem = ({ url, label, className }: MenuItemProps): JSX.Element => {
	return (
		<li className={className}>
			<Link href={url}>
				<a className={className}>{label}</a>
			</Link>
		</li>
	);
};

export default MenuItem;
