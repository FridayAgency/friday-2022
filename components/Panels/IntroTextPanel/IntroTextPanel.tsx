import type {
	Page_Pagepanels_PagePanels_IntroText,
	Project_Pagepanels_PagePanels_IntroText,
} from "../../../types/graphql";

import Section from "../../Section";

import styles from "./IntroTextPanel.module.scss";

/**
 * Intro Text Panel
 *
 * @author Brian Whelan
 *
 * @param {Page Panel | Project Panel} panel The Intro Text page panel
 *
 * @returns The intro text panel
 */

interface IntroTextPanelProps {
	panel: Page_Pagepanels_PagePanels_IntroText | Project_Pagepanels_PagePanels_IntroText;
}

const IntroTextPanel: React.FC<IntroTextPanelProps> = ({ panel }) => {
	return (
		<Section padding="both">
			<h2
				className={`${styles.text} ${styles[panel?.fontSize] ?? ""} ${
					styles[panel?.alignment] ?? ""
				}`}
			>
				{panel?.introText ?? ""}
			</h2>
		</Section>
	);
};

export default IntroTextPanel;
