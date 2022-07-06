import Link from "next/link";

import type {
	Page_Pagepanels_PagePanels_TextAndServiceList1col,
	Page_Pagepanels_PagePanels_TextAndServiceList1col_List_ListItems,
	Project_Pagepanels_PagePanels_TextAndServiceList1col,
	Project_Pagepanels_PagePanels_TextAndServiceList1col_List_ListItems,
} from "../../../types/graphql";
import Editor from "../../Editor";

import Section from "../../Section";
import ServiceButton from "../../ServiceButton";

import styles from "./TextAndServicesPanel.module.scss";

interface TextAndServicesPanelProps {
	panel:
		| Page_Pagepanels_PagePanels_TextAndServiceList1col
		| Project_Pagepanels_PagePanels_TextAndServiceList1col;
}

const TextAndServicesPanel = ({ panel }: TextAndServicesPanelProps): JSX.Element => {
	const { paddingTopBottom, title, bodyContent, list } = panel;

	return (
		<Section alignment={"left"} padding={paddingTopBottom}>
			<>
				{bodyContent && (
					<div className={styles.content}>
						<h3>{title}</h3>
						<Editor copy={bodyContent ?? ""} />
					</div>
				)}
				<div className={styles.services}>
					<h4>{list?.listTitle}</h4>
					<ul>
						{list?.listItems.map(
							(
								service:
									| Project_Pagepanels_PagePanels_TextAndServiceList1col_List_ListItems
									| Page_Pagepanels_PagePanels_TextAndServiceList1col_List_ListItems
							) => (
								<ServiceButton
									key={service?.listItem}
									url={service?.listItemLink?.url}
									title={service?.listItem}
								/>
							)
						)}
					</ul>
				</div>
			</>
		</Section>
	);
};

export default TextAndServicesPanel;
