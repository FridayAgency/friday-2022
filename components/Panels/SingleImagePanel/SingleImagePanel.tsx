import Image from "next/image";
import type {
	Page_Pagepanels_PagePanels_1ColSingleImageLayout,
	Project_Pagepanels_PagePanels_1ColSingleImageLayout,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./SingleImagePanel.module.scss";

interface SingleImagePanelProps {
	panel:
		| Page_Pagepanels_PagePanels_1ColSingleImageLayout
		| Project_Pagepanels_PagePanels_1ColSingleImageLayout;
}

const SingleImagePanel = ({ panel }: SingleImagePanelProps): JSX.Element => {
	const { paddingTopBottom, image, imageSettings } = panel;

	return (
		<Section fullWidth={imageSettings === "Do not scale" ? false : true} padding={paddingTopBottom}>
			<div className={styles.image}>
				<Image
					src={image?.sourceUrl}
					alt={image?.altText}
					layout="fill"
					objectFit={imageSettings === "Do not scale" ? "contain" : "cover"}
					objectPosition="center"
				/>
			</div>
		</Section>
	);
};

export default SingleImagePanel;
