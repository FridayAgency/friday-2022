import { useRef } from "react";
import Slider from "react-slick";

import type {
	Page_Pagepanels_PagePanels_GalleryLayout,
	Page_Pagepanels_PagePanels_GalleryLayout_Gallery,
	Project_Pagepanels_PagePanels_GalleryLayout,
	Project_Pagepanels_PagePanels_GalleryLayout_Gallery,
} from "../../../types/graphql";

import { LeftArrow, RightArrow } from "../../Arrows";

import styles from "./GalleryPanel.module.scss";

/**
 * Gallery Page and Project Panel
 *
 * @author Brian Whelan
 *
 * @param {Page Panel | Project Panel} panel The Gallary panel data
 *
 * @returns A slick slider of the images with custom arrows.
 */

interface GallaryPanelProps {
	panel: Page_Pagepanels_PagePanels_GalleryLayout | Project_Pagepanels_PagePanels_GalleryLayout;
}

const GallaryPanel: React.FC<GallaryPanelProps> = ({ panel }) => {
	const slider = useRef(null!);

	const { gallery, paddingTopBottom } = panel;

	const settings = {
		fade: false,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		centerMode: true,
		slidesToShow: 1,
		centerPadding: "20%",

		responsive: [
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					centerPadding: "5%",
				},
			},
		],
	};

	const handlePrevClick = () => slider.current.slickPrev();
	const handleNextClick = () => slider.current.slickNext();

	return (
		<section
			className={`gallary__slider ${styles.slider} ${styles[paddingTopBottom.toLowerCase()]}`}
		>
			<Slider ref={slider} {...settings}>
				{gallery?.map(
					(
						item:
							| Project_Pagepanels_PagePanels_GalleryLayout_Gallery
							| Page_Pagepanels_PagePanels_GalleryLayout_Gallery,
						index: number
					) => (
						<div
							style={{ width: "320px" }}
							key={`${item?.__typename}-${index}`}
							className={styles.image}
						>
							<img src={item?.gallaryImage?.sourceUrl} />
						</div>
					)
				)}
			</Slider>
			<div className={styles.controls}>
				<div className={`${styles.nav} ${styles["nav-center"]}`}>
					<RightArrow handleClick={handlePrevClick} red={true} />
					<LeftArrow handleClick={handleNextClick} red={true} />
				</div>
			</div>
		</section>
	);
};

export default GallaryPanel;
