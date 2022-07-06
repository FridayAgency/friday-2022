import type {
	Page_Pagepanels_PagePanels_2colImagelTextrLayout,
	Project_Pagepanels_PagePanels_2colImagelTextrLayout,
} from "../../../types/graphql";

interface TextRightImageLeftProps {
	panel:
		| Page_Pagepanels_PagePanels_2colImagelTextrLayout
		| Project_Pagepanels_PagePanels_2colImagelTextrLayout;
}

const TextRightImageLeft = ({ panel }: TextRightImageLeftProps): JSX.Element => {
	return <div>TextRightImageLeft</div>;
};

export default TextRightImageLeft;
