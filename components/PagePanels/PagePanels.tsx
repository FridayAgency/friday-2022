import dynamic from "next/dynamic";

const AwardsPanel = dynamic(() => import("../Panels/AwardsPanel"));
const CallToActionPanel = dynamic(() => import("../Panels/CallToActionPanel"));
const CallToActionPanelAndImagePanel = dynamic(() => import("../Panels/CallToActionAndImagePanel"));
const CallToActionFullpanel = dynamic(() => import("../Panels/CallToActionFullPanel"));
const CaseStudiesPanel = dynamic(() => import("../Panels/CaseStudiesPanel"));
const ExpertisePanel = dynamic(() => import("../Panels/ExpertisePanel"), { ssr: false });
const FridayMethodPanel = dynamic(() => import("../Panels/FridayMethodPanel"));
const GallaryPanel = dynamic(() => import("../Panels/GalleryPanel"));
const IntroTextPanel = dynamic(() => import("../Panels/IntroTextPanel"));
const NextAndPreviousPanel = dynamic(() => import("../Panels/NextAndPreviousPanel"));
const OurClientsPanel = dynamic(() => import("../Panels/OurClientsPanel"));
const ParallaxImagePanel = dynamic(() => import("../Panels/ParallaxImagePanel"));
const QuotePanel = dynamic(() => import("../Panels/QuotePanel"));
const ResultsPanel = dynamic(() => import("../Panels/ResultsPanel"));
const SingleImagePanel = dynamic(() => import("../Panels/SingleImagePanel"));
const Testimonials = dynamic(() => import("../Panels/Testimonials"));
const TextAndServicesPanel = dynamic(() => import("../Panels/TextAndServicesPanel"));
const TextLeftImageRightPanel = dynamic(() => import("../Panels/TextLeftImageRightPanel"));
const TextPanel = dynamic(() => import("../Panels/TextPanel"));
const TextRightImageLeft = dynamic(() => import("../Panels/TextRightImageLeft"));
const TwoImagesPanel = dynamic(() => import("../Panels/TwoImagesPanel"));
const TwoListPanel = dynamic(() => import("../Panels/TwoListPanel"));
const VideoPanel = dynamic(() => import("../Panels/VideoPanel"));
const WorkHeader = dynamic(() => import("../Panels/WorkHeader"));
const WorkSlider = dynamic(() => import("../Panels/WorkSlider"), { ssr: false });

import type {
	Page_Pagepanels_PagePanels,
	Page_Pagepanels,
	Project_Pagepanels_PagePanels,
	Project,
} from "../../types/graphql";

/**
 * Page Panel
 *
 * @author Brian Whelan
 * @param {object} panel The panel object
 * @returns Returns the correct block component depending on the panel.__typename
 */

interface PagePanelProps {
	panel: Page_Pagepanels_PagePanels | Project_Pagepanels_PagePanels;
	project?: Project;
}

const PagePanel: React.FC<PagePanelProps> = ({ panel, project }) => {
	const sectionType = panel?.__typename;

	const Default: React.FC = () => (
		<div>In AllLayouts the mapping of this component is missing: {sectionType}</div>
	);

	const panels = {
		Page_Pagepanels_PagePanels_2colCtaAndImage: CallToActionPanelAndImagePanel,
		Project_Pagepanels_PagePanels_2colCtaAndImage: CallToActionPanelAndImagePanel,
		Page_Pagepanels_PagePanels_CtaFullLayout: CallToActionFullpanel,
		Project_Pagepanels_PagePanels_CtaFullLayout: CallToActionFullpanel,
		Page_Pagepanels_PagePanels_CtaLayout: CallToActionPanel,
		Project_Pagepanels_PagePanels_CtaLayout: CallToActionPanel,
		Page_Pagepanels_PagePanels_CaseStudiesLayout: CaseStudiesPanel,
		Project_Pagepanels_PagePanels_CaseStudiesLayout: CaseStudiesPanel,
		Page_Pagepanels_PagePanels_TheFridayMethod: FridayMethodPanel,
		Project_Pagepanels_PagePanels_TheFridayMethod: FridayMethodPanel,
		Page_Pagepanels_PagePanels_GalleryLayout: GallaryPanel,
		Project_Pagepanels_PagePanels_GalleryLayout: GallaryPanel,
		Page_Pagepanels_PagePanels_IntroText: IntroTextPanel,
		Project_Pagepanels_PagePanels_IntroText: IntroTextPanel,
		Page_Pagepanels_PagePanels_OurClients: OurClientsPanel,
		Project_Pagepanels_PagePanels_OurClients: OurClientsPanel,
		Page_Pagepanels_PagePanels_ParallaxImageLayout: ParallaxImagePanel,
		Project_Pagepanels_PagePanels_ParallaxImageLayout: ParallaxImagePanel,
		Page_Pagepanels_PagePanels_1ColQuoteLayout: QuotePanel,
		Project_Pagepanels_PagePanels_1ColQuoteLayout: QuotePanel,
		Page_Pagepanels_PagePanels_2ColResultsLayout: ResultsPanel,
		Project_Pagepanels_PagePanels_2ColResultsLayout: ResultsPanel,
		Page_Pagepanels_PagePanels_1ColSingleImageLayout: SingleImagePanel,
		Project_Pagepanels_PagePanels_1ColSingleImageLayout: SingleImagePanel,
		Page_Pagepanels_PagePanels_TextAndServiceList1colv: TextAndServicesPanel,
		Project_Pagepanels_PagePanels_TextAndServiceList1colv: TextAndServicesPanel,
		Page_Pagepanels_PagePanels_2colTextlImagerLayout: TextLeftImageRightPanel,
		Project_Pagepanels_PagePanels_2colTextlImagerLayout: TextLeftImageRightPanel,
		Page_Pagepanels_PagePanels_TextPanel: TextPanel,
		Project_Pagepanels_PagePanels_TextPanel: TextPanel,
		Page_Pagepanels_PagePanels_2colImagelTextrLayout: TextRightImageLeft,
		Project_Pagepanels_PagePanels_2colImagelTextrLayout: TextRightImageLeft,
		Page_Pagepanels_PagePanels_2colImagesLayout: TwoImagesPanel,
		Project_Pagepanels_PagePanels_2colImagesLayout: TwoImagesPanel,
		Page_Pagepanels_PagePanels_ListList2Col: TwoListPanel,
		Project_Pagepanels_PagePanels_ListList2Col: TwoListPanel,
		Page_Pagepanels_PagePanels_1ColVideoLayout: VideoPanel,
		Project_Pagepanels_PagePanels_1ColVideoLayout: VideoPanel,
		Page_Pagepanels_PagePanels_WorkHeader: WorkHeader,
		Project_Pagepanels_PagePanels_WorkHeader: WorkHeader,
		Page_Pagepanels_PagePanels_WorkSlider: WorkSlider,
		Project_Pagepanels_PagePanels_WorkSlider: WorkSlider,
		Page_Pagepanels_PagePanels_TextAndServiceList1col: TextAndServicesPanel,
		Project_Pagepanels_PagePanels_TextAndServiceList1col: TextAndServicesPanel,
		Project_Pagepanels_PagePanels_NextAndPrevious: NextAndPreviousPanel,
		Page_Pagepanels_PagePanels_TestimonialsPanel: Testimonials,
		Project_Pagepanels_PagePanels_TestimonialsPanel: Testimonials,
		Page_Pagepanels_PagePanels_AwardsPanel: AwardsPanel,
		Page_Pagepanels_PagePanels_ExpertisePanel: ExpertisePanel,
		default: Default,
	};

	const ComponentToRender = panels[sectionType] ? panels[sectionType] : panels["default"];

	return (
		<ComponentToRender
			panel={panel}
			project={sectionType === "Project_Pagepanels_PagePanels_NextAndPrevious" ? project : null}
		/>
	);
};

/**
 * PagePanels
 *
 * @author Brian Whelan
 * @param {array} panels The page ACF blocks
 *
 * @returns Maps trough the panels and returns Pagesection Component
 */

interface PagePanelsProps {
	panels: Page_Pagepanels;
	project?: Project;
}

const PagePanels = ({ panels, project }: PagePanelsProps): JSX.Element => {
	const { pagePanels } = panels;

	return (
		<>
			{pagePanels.map((panel) => (
				<PagePanel
					key={`${panel.__typename}-${new Date().getTime() + Math.random()}`}
					panel={panel}
					project={project}
				/>
			))}
		</>
	);
};

export default PagePanels;
