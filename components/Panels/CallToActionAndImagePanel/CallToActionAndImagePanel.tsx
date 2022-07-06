import Section from "../../Section";
import Image from "next/image";
import CtaButton from "../../CtaButton";
import ServiceButton from "../../ServiceButton";

import type {
	Page_Pagepanels_PagePanels_2colCtaAndImage,
	Page_Pagepanels_PagePanels_2colCtaAndImage_Cta_OtherExpertise,
	Project_Pagepanels_PagePanels_2colCtaAndImage,
	Project_Pagepanels_PagePanels_2colCtaAndImage_Cta_OtherExpertise,
} from "../../../types/graphql";

import styles from "./CallToActionAndImage.module.scss";

interface CallToActionAndImagePanelProps {
	panel: Page_Pagepanels_PagePanels_2colCtaAndImage | Project_Pagepanels_PagePanels_2colCtaAndImage;
}

const CallToActionAndImagePanel: React.FC<CallToActionAndImagePanelProps> = ({ panel }) => {
	const { cta, ctaButton, image, imagePosition, paddingTopBottom, gridGap, contentPadding } = panel;
	const paddingClass: string = paddingTopBottom.toLocaleLowerCase().trim().replace(" ", "-");

	const containerClass: string = `${styles.container} ${styles[imagePosition]} ${
		styles[paddingClass]
	} ${styles[gridGap === "yes" ? "gap" : ""]} `;

	const contentClass: string = `${styles.content} ${
		styles[contentPadding === "yes" ? "padding" : ""]
	}`;

	const headingClass: string = `${styles[cta?.titleColor]} ${styles[panel?.headingFontSize ?? ""]}`;

	return (
		<Section>
			<div className={containerClass}>
				<div className={styles.image}>
					<Image
						src={image?.sourceUrl}
						alt={image?.altText}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className={contentClass}>
					<h3 className={headingClass}>{cta?.title ?? ""}</h3>
					<p>{cta?.copy ?? ""}</p>
					{cta?.otherExpertise && (
						<ul>
							{cta?.otherExpertise.map(
								(
									expertise:
										| Page_Pagepanels_PagePanels_2colCtaAndImage_Cta_OtherExpertise
										| Project_Pagepanels_PagePanels_2colCtaAndImage_Cta_OtherExpertise,
									index: number
								) => (
									<ServiceButton
										key={`${expertise?.__typename}-${index}`}
										url={expertise?.expertise?.url}
										title={expertise?.expertise?.title}
									/>
								)
							)}
						</ul>
					)}
					{cta?.subtitle && <p className={styles.subtitle}>{cta?.subtitle ?? ""}</p>}

					<CtaButton
						url={ctaButton?.url}
						title={ctaButton?.title}
						colour="red"
						screenReaderText={cta?.title}
					/>
				</div>
			</div>
		</Section>
	);
};

export default CallToActionAndImagePanel;
