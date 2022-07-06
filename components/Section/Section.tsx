import styles from "./Section.module.scss";

/**
 * Section Component
 *
 * @author Brian Whelan
 * @param {React.ReactNode} children The children of the component
 * @param {string} bgColour Optional background colour defaults to the base colour
 * @param {string} bgImage Url for an optional background image
 * @param {string} alignment The optional alignment for the sections content
 *
 * @returns A section component to wrap you content with
 */

interface SectionProps {
	children: React.ReactNode;
	bgColour?: string | "base" | "primary" | "secondary" | "tertiary" | "black";
	bgImage?: string;
	alignment?: string | "left" | "center" | "right";
	padding?: string | "Both" | "None" | "Top Only" | "Bottom Only";
	fullWidth?: boolean;
	position?: "relative";
	customClass?: string;
}

const Section = ({
	children,
	bgColour = "base",
	bgImage,
	alignment,
	padding,
	fullWidth = false,
	position,
	customClass,
}: SectionProps): JSX.Element => {
	let paddingClass: string;
	if (padding) {
		paddingClass = padding.toLocaleLowerCase().trim().replace(" ", "-");
	}

	return (
		<section
			className={`${styles.section} ${styles[bgColour] ?? ""} ${styles[paddingClass] ?? ""} ${
				customClass ?? ""
			}`}
			style={
				bgImage && {
					backgroundImage: bgImage ? `url(${bgImage})` : "none",
					position: position ? position : "static",
				}
			}
		>
			<div
				className={`${styles.container} ${alignment ? styles[alignment] : ""} ${
					fullWidth ? styles["fullWidth"] : ""
				}`}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
