import { gql } from "@apollo/client";
import * as Panels from "../panels";

const PROJECT_PANELS_FRAGMENT = gql`
	fragment ProjectpanelsFragment on Project_Pagepanels {
		pagePanels {
			... on Project_Pagepanels_PagePanels_GalleryLayout {
				${Panels.GalleryFragment}
			}
			... on Project_Pagepanels_PagePanels_1ColQuoteLayout {
				${Panels.QuoteFragment}
			}
			... on Project_Pagepanels_PagePanels_1ColSingleImageLayout {
				${Panels.SingleImageFragment}
			}
			... on Project_Pagepanels_PagePanels_1ColVideoLayout {
				${Panels.VideoFragment}
			}
			... on Project_Pagepanels_PagePanels_2colImagelTextrLayout {
				${Panels.TextRightImageLeftFragment}
			}
			... on Project_Pagepanels_PagePanels_2colTextlImagerLayout {
				${Panels.TextLeftImageRightFragment}
			}
			... on Project_Pagepanels_PagePanels_2colImagesLayout {
				${Panels.TwoImagesFragment}
			}
			... on Project_Pagepanels_PagePanels_2ColResultsLayout {
				${Panels.ResultsFragment}
			}
			... on Project_Pagepanels_PagePanels_ParallaxImageLayout {
				${Panels.ParallaxImageFragment}
			}
			... on Project_Pagepanels_PagePanels_CaseStudiesLayout {
				${Panels.CaseStudiesFragment}
			}
			... on Project_Pagepanels_PagePanels_CtaLayout {
				${Panels.CtaFragment}
			}
			... on Project_Pagepanels_PagePanels_CtaFullLayout {
				${Panels.CtaFullFragment}
			}
			... on Project_Pagepanels_PagePanels_WorkSlider {
				${Panels.WorkSliderFragment}
			}
			... on Project_Pagepanels_PagePanels_TheFridayMethod {
				${Panels.FridayMethodFragment}
			}
			... on Project_Pagepanels_PagePanels_OurClients {
				${Panels.OurClientsFragment}
			}
			... on Project_Pagepanels_PagePanels_IntroText {
				${Panels.IntroTextFragment}
			}
			... on Project_Pagepanels_PagePanels_2colCtaAndImage {
				${Panels.CtaAndImageFragment}
			}
			... on Project_Pagepanels_PagePanels_TextPanel {
				${Panels.TextPanelFragment}
			}
			... on Project_Pagepanels_PagePanels_TextAndServiceList1col {
				${Panels.TextAndServiceListFragment}
			}
			... on Project_Pagepanels_PagePanels_ListList2Col {
				${Panels.TwoListFragment}
			}
			... on Project_Pagepanels_PagePanels_WorkHeader {
				${Panels.WorkHeaderFragment}
			}
			... on Project_Pagepanels_PagePanels_NextAndPrevious{
				${Panels.NextAndPrevious}
			}
			...on Project_Pagepanels_PagePanels_TestimonialsPanel{
				${Panels.Testimonials}
			}
		}
	}
`;

export default PROJECT_PANELS_FRAGMENT;
