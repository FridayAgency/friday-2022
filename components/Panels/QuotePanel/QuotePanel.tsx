import type {
	Page_Pagepanels_PagePanels_1ColQuoteLayout,
	Project_Pagepanels_PagePanels_1ColQuoteLayout,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./QuotePanel.module.scss";

interface QuotePanelProps {
	panel: Page_Pagepanels_PagePanels_1ColQuoteLayout | Project_Pagepanels_PagePanels_1ColQuoteLayout;
}

const QuotePanel: React.FC<QuotePanelProps> = ({ panel }) => {
	return (
		<Section bgColour={panel?.backgroundColour === "white" ? "base" : "grey"}>
			<div className={`${styles.container} ${styles[panel?.backgroundColour]}`}>
				<p className={styles.quote}>{panel?.quote ?? ""}</p>
				<p className={styles.author}>{panel?.quoteRef ?? ""}</p>
			</div>
		</Section>
	);
};

export default QuotePanel;
