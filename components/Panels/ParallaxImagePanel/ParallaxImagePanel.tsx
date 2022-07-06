import Image from "next/image";
import { useEffect, useRef } from "react";
import Rellax from "rellax";
import type {
	Page_Pagepanels_PagePanels_ParallaxImageLayout,
	Project_Pagepanels_PagePanels_ParallaxImageLayout,
} from "../../../types/graphql";

import styles from "./ParallaxImagePanel.module.scss";

interface ParallaxImagePanelProps {
	panel:
		| Page_Pagepanels_PagePanels_ParallaxImageLayout
		| Project_Pagepanels_PagePanels_ParallaxImageLayout;
}

const ParallaxImagePanel: React.FC<ParallaxImagePanelProps> = ({ panel }) => {
	const parallax = useRef(null!);
	const position = panel?.parallaxImageAlignment.toLowerCase();

	useEffect(() => {
		new Rellax(parallax.current, {
			speed: 5,
			center: true,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});
	}, []);

	return (
		<div ref={parallax} className={`${styles.container} ${styles[position]}`}>
			<div className={styles.image}>
				<Image
					src={panel?.parallaxImage?.sourceUrl}
					alt={panel?.parallaxImage?.altText}
					height={200}
					width={200}
					layout="responsive"
					sizes="50vw"
					objectFit="contain"
					objectPosition="0 0"
				/>
			</div>
		</div>
	);
};

export default ParallaxImagePanel;
