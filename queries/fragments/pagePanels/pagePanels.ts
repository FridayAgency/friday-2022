import { gql } from "@apollo/client";
import * as Panels from "../panels";

const PAGE_PANELS_FRAGMENT = gql`
	fragment PagepanelsFragment on Page_Pagepanels {
		pagePanels {
			... on Page_Pagepanels_PagePanels_GalleryLayout {
				${Panels.GalleryFragment}
			}
			... on Page_Pagepanels_PagePanels_1ColQuoteLayout {
				${Panels.QuoteFragment}
			}
			... on Page_Pagepanels_PagePanels_1ColSingleImageLayout {
				${Panels.SingleImageFragment}
			}
			... on Page_Pagepanels_PagePanels_1ColVideoLayout {
				${Panels.VideoFragment}
			}
			... on Page_Pagepanels_PagePanels_2colImagelTextrLayout {
				${Panels.TextRightImageLeftFragment}
			}
			... on Page_Pagepanels_PagePanels_2colTextlImagerLayout {
				${Panels.TextLeftImageRightFragment}
			}
			... on Page_Pagepanels_PagePanels_2colImagesLayout {
				${Panels.TwoImagesFragment}
			}
			... on Page_Pagepanels_PagePanels_2ColResultsLayout {
				${Panels.ResultsFragment}
			}
			... on Page_Pagepanels_PagePanels_ParallaxImageLayout {
				${Panels.ParallaxImageFragment}
			}
			... on Page_Pagepanels_PagePanels_CaseStudiesLayout {
				${Panels.CaseStudiesFragment}
			}
			... on Page_Pagepanels_PagePanels_CtaLayout {
				${Panels.CtaFragment}
			}
			... on Page_Pagepanels_PagePanels_CtaFullLayout {
				${Panels.CtaFullFragment}
			}
			... on Page_Pagepanels_PagePanels_WorkSlider {
				${Panels.WorkSliderFragment}
			}
			... on Page_Pagepanels_PagePanels_TheFridayMethod {
				${Panels.FridayMethodFragment}
			}
			... on Page_Pagepanels_PagePanels_OurClients {
				${Panels.OurClientsFragment}
			}
			... on Page_Pagepanels_PagePanels_IntroText {
				${Panels.IntroTextFragment}
			}
			... on Page_Pagepanels_PagePanels_2colCtaAndImage {
				${Panels.CtaAndImageFragment}
			}
			... on Page_Pagepanels_PagePanels_TextPanel {
				${Panels.TextPanelFragment}
			}
			... on Page_Pagepanels_PagePanels_TextAndServiceList1col {
				${Panels.TextAndServiceListFragment}
			}
			... on Page_Pagepanels_PagePanels_ListList2Col {
				${Panels.TwoListFragment}
			}
			... on Page_Pagepanels_PagePanels_WorkHeader {
				${Panels.WorkHeaderFragment}
			}
			...on Page_Pagepanels_PagePanels_TestimonialsPanel{
				${Panels.Testimonials}
			}
			... on Page_Pagepanels_PagePanels_AwardsPanel{
				${Panels.AwardsPanel}
			}
			... on Page_Pagepanels_PagePanels_ExpertisePanel{
				${Panels.ExpertisePanel}
			}
		}
	}
`;

export default PAGE_PANELS_FRAGMENT;
