const CTA_AND_IAMGE_FRAGMENT = `
		image {
			sourceUrl
			altText
		}
		imagePosition
		paddingTopBottom
		gridGap
		contentPadding
		headingFontSize
		cta {
			title
			copy
			titleColor
            subtitle
			otherExpertise {
				expertise {
					url
					title
					target
				}
			}
		}
		ctaButton {
			url
			title
			target
		}
`;

export default CTA_AND_IAMGE_FRAGMENT;
