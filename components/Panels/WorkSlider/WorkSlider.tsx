import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import type {
	Page_Pagepanels_PagePanels_WorkSlider,
	Page_Pagepanels_PagePanels_WorkSlider_Slider,
	Project_Pagepanels_PagePanels_WorkSlider,
	Project_Pagepanels_PagePanels_WorkSlider_Slider,
} from "../../../types/graphql";

import styles from "./WorkSlider.module.scss";

import { LeftArrow, RightArrow } from "../../Arrows";
import ProjectSnippet from "../../ProjectSnippet";
import CtaButton from "../../CtaButton";

interface WorkSliderProps {
	panel: Page_Pagepanels_PagePanels_WorkSlider | Project_Pagepanels_PagePanels_WorkSlider;
}

const WorkSlider: React.FC<WorkSliderProps> = ({ panel }) => {
	const bgSlider = useRef<Slider | null>(null!);
	const workSlider = useRef<Slider | null>(null!);

	const colours = panel.slider.map(
		(
			slide:
				| Page_Pagepanels_PagePanels_WorkSlider_Slider
				| Project_Pagepanels_PagePanels_WorkSlider_Slider
		) => slide?.featuredProject?.projectBrandColour?.projectBrandColour
	);
	const [index, setIndex] = useState(0);
	const [bgcolor, setBgColor] = useState<string>(colours[0]);
	const [sliderNavFor, setSliderNavFor] = useState<Slider>();

	const checkBrightness = (color: string) => {
		const hex = color.replace("#", "");
		const cr = parseInt(hex.substr(0, 2), 16);
		const cg = parseInt(hex.substr(2, 2), 16);
		const cb = parseInt(hex.substr(4, 2), 16);
		const brightness = (cr * 299 + cg * 587 + cb * 114) / 1000;

		return brightness > 140;
	};

	useEffect(() => {
		setSliderNavFor(bgSlider.current);
		setBgColor(colours[index]);
	}, [index]);

	const bgSliderSettings = {
		cssEase: "cubic-bezier(0.39, 0.575, 0.565, 1)",
		speed: 800,
		fade: true,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const workSliderSettings = {
		cssEase: "cubic-bezier(0.39, 0.575, 0.565, 1)",
		speed: 800,
		asNavFor: sliderNavFor,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (oldIndex: number, newIndex: number) => setIndex(newIndex),
	};

	const handlePrevClick = () => workSlider.current.slickPrev();
	const handleNextClick = () => workSlider.current.slickNext();

	return (
		<section className={styles["slider__section"]}>
			<h2
				style={{
					color: !checkBrightness(bgcolor) ? "#fff" : "#000",
					transition: "all .5s ease-in",
				}}
			>
				Work
			</h2>
			<Slider className={styles["slider-background"]} ref={bgSlider} {...bgSliderSettings}>
				{panel?.slider?.map(
					(
						item:
							| Page_Pagepanels_PagePanels_WorkSlider_Slider
							| Project_Pagepanels_PagePanels_WorkSlider_Slider,
						index: number
					) => (
						<div key={`${item?.featuredProject?.id}-${index}`}>
							<div
								style={{
									backgroundColor: item?.featuredProject?.projectBrandColour?.projectBrandColour,
								}}
							/>
						</div>
					)
				)}
			</Slider>
			<Slider className={styles["slider-projects"]} ref={workSlider} {...workSliderSettings}>
				{panel?.slider?.map(
					(
						item:
							| Page_Pagepanels_PagePanels_WorkSlider_Slider
							| Project_Pagepanels_PagePanels_WorkSlider_Slider,
						index: number
					) => {
						const [details]: any = item?.featuredProject?.pagePanels?.pagePanels.filter(
							(panel) => panel?.__typename === "Project_Pagepanels_PagePanels_WorkHeader"
						);

						return (
							<div className={styles["slider-item"]} key={`${item?.featuredProject?.id}-${index}`}>
								<ProjectSnippet
									url={item?.featuredProject?.uri}
									headerImage={details?.headerImage}
									clientLogo={details?.clientLogo}
									title={details?.projectSubtitle}
									priority={true}
								/>
							</div>
						);
					}
				)}
			</Slider>
			<div className={styles.controls}>
				<div className={`${styles.nav}`}>
					<RightArrow handleClick={handlePrevClick} black={checkBrightness(bgcolor)} />
					<LeftArrow handleClick={handleNextClick} black={checkBrightness(bgcolor)} />
				</div>
			</div>
			<div className={styles.cta}>
				<CtaButton
					url="work"
					title="See More Work"
					colour={!checkBrightness(bgcolor) ? "white" : "black"}
				/>
			</div>
		</section>
	);
};

export default WorkSlider;
