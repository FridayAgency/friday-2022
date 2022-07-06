import Image from "next/image";
import type {
	Page_Pagepanels_PagePanels_WorkHeader,
	Project_Pagepanels_PagePanels_WorkHeader,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./WorkHeader.module.scss";

interface WorkHeaderProps {
	panel: Page_Pagepanels_PagePanels_WorkHeader | Project_Pagepanels_PagePanels_WorkHeader;
}

const WorkHeader: React.FC<WorkHeaderProps> = ({ panel }) => {
	return (
		<Section fullWidth>
			<div className={styles.wrapper}>
				<div className={styles.image}>
					<Image
						src={panel?.headerImage?.sourceUrl}
						alt={panel?.headerImage?.altText}
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>

				<div className={styles.content}>
					<h1 className={styles.title}>{panel?.projectSubtitle}</h1>
					<div className={styles.logo}>
						<Image
							src={panel?.clientLogo?.sourceUrl}
							alt={panel?.clientLogo?.altText}
							height={80}
							width={100}
							layout="responsive"
							objectFit="contain"
							objectPosition="0 0"
							priority
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default WorkHeader;
