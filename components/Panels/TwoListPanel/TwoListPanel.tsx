import type {
	Page_Pagepanels_PagePanels_ListList2Col,
	Page_Pagepanels_PagePanels_ListList2Col_LeftList_ListItems,
	Page_Pagepanels_PagePanels_ListList2Col_RightList_ListItems,
	Project_Pagepanels_PagePanels_ListList2Col,
	Project_Pagepanels_PagePanels_ListList2Col_LeftList_ListItems,
	Project_Pagepanels_PagePanels_ListList2Col_RightList_ListItems,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./TwoListPanel.module.scss";

interface TwoListPanelProps {
	panel: Page_Pagepanels_PagePanels_ListList2Col | Project_Pagepanels_PagePanels_ListList2Col;
}

const TwoListPanel = ({ panel }: TwoListPanelProps): JSX.Element => {
	return (
		<Section padding="none">
			<div className={styles.container}>
				<div className={styles.left}>
					<h5>{panel?.leftList?.listTitle ?? ""}</h5>
					<ul>
						{panel?.leftList?.listItems?.map(
							(
								item:
									| Page_Pagepanels_PagePanels_ListList2Col_LeftList_ListItems
									| Project_Pagepanels_PagePanels_ListList2Col_LeftList_ListItems,
								index: number
							) => (
								<li key={`${item?.__typename}-${index}`}>{item?.listItem}</li>
							)
						)}
					</ul>
				</div>
				<div className={styles.right}>
					<h5>{panel?.rightList?.listTitle ?? ""}</h5>
					<ul>
						{panel?.rightList?.listItems?.map(
							(
								item:
									| Page_Pagepanels_PagePanels_ListList2Col_RightList_ListItems
									| Project_Pagepanels_PagePanels_ListList2Col_RightList_ListItems,
								index: number
							) => (
								<li key={`${item?.__typename}-${index}`}>{item?.listItem}</li>
							)
						)}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default TwoListPanel;
