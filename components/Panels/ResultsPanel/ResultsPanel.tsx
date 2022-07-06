import React from "react";
import type {
	Page_Pagepanels_PagePanels_2ColResultsLayout,
	Page_Pagepanels_PagePanels_2ColResultsLayout_LeftResults,
	Project_Pagepanels_PagePanels_2ColResultsLayout,
	Project_Pagepanels_PagePanels_2ColResultsLayout_LeftResults,
	Project_Pagepanels_PagePanels_2ColResultsLayout_RightResult,
	Page_Pagepanels_PagePanels_2ColResultsLayout_RightResult,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./ResultsPanel.module.scss";

interface ResultsPanelProps {
	panel:
		| Page_Pagepanels_PagePanels_2ColResultsLayout
		| Project_Pagepanels_PagePanels_2ColResultsLayout;
}

interface ResultProps {
	results:
		| Project_Pagepanels_PagePanels_2ColResultsLayout_LeftResults[]
		| Page_Pagepanels_PagePanels_2ColResultsLayout_LeftResults[]
		| Project_Pagepanels_PagePanels_2ColResultsLayout_RightResult[]
		| Page_Pagepanels_PagePanels_2ColResultsLayout_RightResult[];
}

export const Results = ({ results }: ResultProps) => {
	return (
		<div>
			{results?.map((result) => (
				<React.Fragment key={result?.resultTitle}>
					<p className={styles.title}>{result?.resultTitle}</p>
					<p className={styles.result}>{result?.result ?? result?.resultContent}</p>
				</React.Fragment>
			))}
		</div>
	);
};

const ResultsPanel = ({ panel }: ResultsPanelProps): JSX.Element => {
	const { paddingTopBottom, customTitle, leftResults, rightResult } = panel;
	return (
		<Section padding={paddingTopBottom}>
			<div className={styles.content}>
				<h3>{customTitle}</h3>
				<div className={styles.results}>
					<Results results={leftResults} />
					<Results results={rightResult} />
				</div>
			</div>
		</Section>
	);
};

export default ResultsPanel;
