const AWARDS_PANEL_FRAGMENT = `
    paddingTopBottom
    awards{
        ...on Page_Pagepanels_PagePanels_AwardsPanel_awards{
        awardLogo{
                altText
                sourceUrl
                mediaDetails{
                    height
                    width
                }
        }
        awardTitle
        }
    }
`;

export default AWARDS_PANEL_FRAGMENT;
