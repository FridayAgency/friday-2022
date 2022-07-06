import { useRef } from "react";
import Slider from "react-slick";
import {
	Page_Pagepanels_PagePanels_TestimonialsPanel,
	Page_Pagepanels_PagePanels_TestimonialsPanel_Testimonial,
	Project_Pagepanels_PagePanels_TestimonialsPanel,
	Project_Pagepanels_PagePanels_TestimonialsPanel_Testimonial,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./Testimonials.module.scss";

import Editor from "../../Editor";
import { LeftArrow, RightArrow } from "../../Arrows";

interface TestimonialsProps {
	panel:
		| Page_Pagepanels_PagePanels_TestimonialsPanel
		| Project_Pagepanels_PagePanels_TestimonialsPanel;
}

const Testimonials: React.FC<TestimonialsProps> = ({ panel }) => {
	const testimonialSLider = useRef<Slider | null>(null!);

	const sliderSettings = {
		speed: 600,
		fade: true,
		arrows: false,
	};

	const handlePrevClick = () => testimonialSLider.current.slickPrev();
	const handleNextClick = () => testimonialSLider.current.slickNext();

	return (
		<Section bgColour="black" customClass={styles.testimonials}>
			<div className={styles.container}>
				<h3 className={styles.title}>{panel?.title}</h3>

				<div className={styles.slider}>
					<Slider ref={testimonialSLider} {...sliderSettings}>
						{panel?.testimonial?.map(
							(
								testimonial:
									| Page_Pagepanels_PagePanels_TestimonialsPanel_Testimonial
									| Project_Pagepanels_PagePanels_TestimonialsPanel_Testimonial,
								index: number
							) => (
								<div key={index}>
									<Editor copy={testimonial?.testimonialCopy} className={styles.copy} />
									<div className={styles["author__wrapper"]}>
										<p className={styles.author}> {testimonial?.testimonialAuthor}</p>
										<p className={styles.position}>{testimonial?.authorPosition}</p>
									</div>
								</div>
							)
						)}
					</Slider>
					<div className={styles.right}>
						<RightArrow handleClick={handlePrevClick} />
					</div>
					<div className={styles.left}>
						<LeftArrow handleClick={handleNextClick} />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Testimonials;
