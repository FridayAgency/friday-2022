import Image from "next/image";
import type {
	Page_Pagepanels_PagePanels_2colImagesLayout,
	Project_Pagepanels_PagePanels_2colImagesLayout,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./TwoImagesPanel.module.scss";

interface TwoImagesPanelProps {
	panel:
		| Page_Pagepanels_PagePanels_2colImagesLayout
		| Project_Pagepanels_PagePanels_2colImagesLayout;
}

const TwoImagesPanel = ({ panel }: TwoImagesPanelProps): JSX.Element => {
	const { paddingTopBottom, leftImage, rightImage, imageSizes, hideImageOnMobile } = panel;

	let imageSizesClass: string;

	if (imageSizes === "equal") {
		imageSizesClass = "default";
	} else if (imageSizes === "2-1") {
		imageSizesClass = "thirds_2_1";
	} else if (imageSizes === "1-2") {
		imageSizesClass = "thirds_1_2";
	}
	return (
		<Section padding={paddingTopBottom} fullWidth={true}>
			<div className={`${styles.container} ${styles[imageSizesClass]}`}>
				<div
					className={`${styles.first} ${hideImageOnMobile === "hide_first" ? styles.hide : ""}`}
					// style={{ backgroundImage: `url(${leftImage?.sourceUrl})` }}
				>
					<Image
						src={leftImage?.sourceUrl}
						alt={leftImage?.altText}
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div
					className={`${styles.second} ${hideImageOnMobile === "hide_second" ? styles.hide : ""}`}
				>
					<Image
						src={rightImage?.sourceUrl}
						alt={rightImage?.altText}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</Section>
	);
};

export default TwoImagesPanel;
