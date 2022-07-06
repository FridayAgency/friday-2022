import type {
	Page_Pagepanels_PagePanels_2colTextlImagerLayout,
	Project_Pagepanels_PagePanels_2colTextlImagerLayout,
} from "../../../types/graphql";

interface TextLeftImageRightPanelProps {
	panel:
		| Page_Pagepanels_PagePanels_2colTextlImagerLayout
		| Project_Pagepanels_PagePanels_2colTextlImagerLayout;
}

const TextLeftImageRightPanel = ({ panel }: TextLeftImageRightPanelProps): JSX.Element => {
	return <div>TextLeftImageRightPanel</div>;
};

export default TextLeftImageRightPanel;
