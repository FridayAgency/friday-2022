import Image from "next/image";
import {
	Page_Pagepanels_PagePanels_AwardsPanel,
	Page_Pagepanels_PagePanels_AwardsPanel_Awards,
} from "../../../types/graphql";
import Section from "../../Section";
import styles from "./AwardsPanel.module.scss";

interface AwardsPanelProps {
	panel: Page_Pagepanels_PagePanels_AwardsPanel;
}

const AwardsPanel: React.FC<AwardsPanelProps> = ({ panel }) => {
	return (
		<Section padding={panel?.paddingTopBottom}>
			{panel?.awards && (
				<ul className={styles.awards}>
					{panel?.awards.map(
						(award: Page_Pagepanels_PagePanels_AwardsPanel_Awards, index: number) => (
							<li className={styles.award} key={`${award?.__typename}-${index}`}>
								<div className={styles.logo}>
									<Image
										src={award?.awardLogo?.sourceUrl}
										alt={award?.awardLogo?.altText ?? ""}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<p className={styles.title}>{award?.awardTitle}</p>
							</li>
						)
					)}
				</ul>
			)}
		</Section>
	);
};

export default AwardsPanel;
