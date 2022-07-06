import Image from "next/image";
import { useEffect, useRef } from "react";
import { Page_Pagepanels_PagePanels_ExpertisePanel } from "../../../types/graphql";
import dynamic from "next/dynamic";
const CtaButton = dynamic(() => import("../../CtaButton"));
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import styles from "./Expertise.module.scss";

/**
 * Expertise panel
 *
 * @author Brian Whelan
 *
 * @param {panel} panel The Expertise page panel
 *
 * @returns The expertise section for the homepage
 */

interface ExpertisePanelProps {
	panel: Page_Pagepanels_PagePanels_ExpertisePanel;
}

const ExpertisePanel: React.FC<ExpertisePanelProps> = ({ panel }) => {
	const { expertiseBlock } = panel || null;

	const fadeRef = useRef([]);

	useEffect(() => {
		if (window.innerWidth < 1000) {
			fadeRef.current.forEach((el) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						toggleActions: "play pause resume pause",
						scrub: false,
						start: "top 75%",
					},
				});

				tl.to(el, {
					y: 0,
					opacity: 1,
					duration: 1,
				});
			});
		}
	}, []);

	return (
		<section className={styles.expertise}>
			{expertiseBlock &&
				expertiseBlock.map((block, index: number) => (
					<div key={`${block?.__typename}-${index}`} className={styles["expertise-block"]}>
						<div className={styles.image}>
							<Image
								src={block?.image?.sourceUrl}
								alt={block?.image?.altText ?? ""}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className={styles.overlay}>
							<div
								ref={(ref) => (fadeRef.current = [...fadeRef.current, ref])}
								className={styles.content}
							>
								<h3 className={styles.title}>{block?.title ?? ""}</h3>
								<p className={styles.copy}> {block?.copy ?? ""}</p>
								<p className={styles.subtitle}>{block?.subtitle ?? ""}</p>

								<CtaButton
									url={block?.ctaButton?.url}
									title={block?.ctaButton?.title}
									customClass={styles["expertise-btn"]}
									colour="solid"
								/>
							</div>
						</div>
					</div>
				))}
		</section>
	);
};

export default ExpertisePanel;
