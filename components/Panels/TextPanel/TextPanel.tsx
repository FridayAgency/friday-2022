import type {
	Page_Pagepanels_PagePanels_TextPanel,
	Project_Pagepanels_PagePanels_TextPanel,
} from "../../../types/graphql";
import Editor from "../../Editor";
import Section from "../../Section";

import styles from "./TextPanel.module.scss";

interface TextPanelProps {
	panel: Page_Pagepanels_PagePanels_TextPanel | Project_Pagepanels_PagePanels_TextPanel;
}

const TextPanel: React.FC<TextPanelProps> = ({ panel }) => {
	return (
		<Section
			alignment={panel?.alignment}
			padding={panel?.paddingTopBottom}
			customClass={styles[panel?.fontSize]}
		>
			<div
				className={`${styles.content} ${panel?.restrictWidth === "yes" ? styles["small"] : ""} ${
					styles[panel?.alignment]
				}`}
			>
				<h2 className={styles[panel?.titleColour]}>{panel?.title}</h2>
				<Editor copy={panel?.copy} />
			</div>
		</Section>
	);
};

export default TextPanel;
