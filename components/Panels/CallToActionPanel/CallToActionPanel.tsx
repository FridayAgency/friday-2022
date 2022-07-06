import Section from "../../Section";

import type {
	Page_Pagepanels_PagePanels_CtaLayout,
	Project_Pagepanels_PagePanels_CtaLayout,
} from "../../../types/graphql";

import styles from "./CallToActionPanel.module.scss";

/**
 * Call To Action  Page and Project Panel
 *
 * @author Brian Whelan
 *
 * @param {Page Panel | Project Panel} panel The Call To Action page panel
 *
 * @returns The smaller call to action panel
 */

interface CallToActionPanelProps {
	panel: Page_Pagepanels_PagePanels_CtaLayout | Project_Pagepanels_PagePanels_CtaLayout;
}

const CallToActionPanel = ({ panel }: CallToActionPanelProps): JSX.Element => {
	const { ctaTitle, ctaLink, paddingTopBottom } = panel;

	return (
		<Section alignment="centre" padding={paddingTopBottom ?? ""}>
			<p className={styles.title}>{ctaTitle}</p>
			<a className={styles.link} href={ctaLink?.url} target="_blank" rel="noopener noreferrer">
				{ctaLink?.title}
			</a>
		</Section>
	);
};

export default CallToActionPanel;
