import { useEffect, useRef } from "react";

import type {
	Page_Pagepanels_PagePanels_TheFridayMethod,
	Project_Pagepanels_PagePanels_TheFridayMethod,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./FridayMethodPanel.module.scss";
import MethodAnimation from "./MethodAnimation";
import MethodSlider from "./MethodSlider";
interface FridayMethodPanelProps {
	panel: Page_Pagepanels_PagePanels_TheFridayMethod | Project_Pagepanels_PagePanels_TheFridayMethod;
}

const FridayMethodPanel: React.FC<FridayMethodPanelProps> = ({ panel }) => {
	const { fridayMethod } = panel;
	const sliderRef = useRef(null!);

	return (
		<Section bgColour="black" padding="both">
			<div className={styles.container}>
				<div className={styles.header}>
					<h2>The Friday method</h2>
					<p>{fridayMethod?.introParagraph ?? ""}</p>
				</div>

				<div className={styles["container-animation"]}>
					<MethodAnimation sliderRef={sliderRef} />
				</div>
				<div className={styles["container-slider"]}>
					<MethodSlider
						ref={sliderRef}
						discovery={fridayMethod?.discoveryContent ?? ""}
						strategy={fridayMethod?.strategyContent ?? ""}
						design={fridayMethod?.designContent ?? ""}
					/>
				</div>
			</div>
		</Section>
	);
};

export default FridayMethodPanel;
