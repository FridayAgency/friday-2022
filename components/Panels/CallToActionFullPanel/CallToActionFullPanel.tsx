import Link from "next/link";
import Image from "next/image";
import type {
	Page_Pagepanels_PagePanels_CtaFullLayout,
	Project_Pagepanels_PagePanels_CtaFullLayout,
} from "../../../types/graphql";
import CtaButton from "../../CtaButton";

import styles from "./CallToActionFull.module.scss";

/**
 * Call To Action Full Page and Project Panel
 *
 * @author Brian Whelan
 *
 * @param {Page Panel | Project Panel} panel The Call To ActionFull page panel
 *
 * @returns The Full Call To Action Panel
 */

interface CallToActionFullPanelProps {
	panel: Page_Pagepanels_PagePanels_CtaFullLayout | Project_Pagepanels_PagePanels_CtaFullLayout;
}

const CallToActionFullPanel: React.FC<CallToActionFullPanelProps> = ({ panel }) => {
	return (
		<section className={styles.cta}>
			<Image
				src={panel?.backgroundImage?.sourceUrl}
				layout="fill"
				alt={panel?.backgroundImage?.altText ?? ""}
				objectFit="cover"
			/>
			<div className={styles.content}>
				<p>{panel?.ctaSmallTitle}</p>
				<h2>{panel.mainContent}</h2>

				<CtaButton url={panel?.button?.url} title={panel?.button?.title} colour="white" />
			</div>
		</section>
	);
};

export default CallToActionFullPanel;
