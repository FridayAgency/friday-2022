import { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap/dist/gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
import styles from "./WavyLine.module.scss";

const WavyLine = () => {
	const path = useRef<SVGRectElement>(null!);
	const pathTwo = useRef<SVGPathElement>(null!);
	const trigger = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		const convertedPath = MorphSVGPlugin.convertToPath(path.current);
		gsap.set(pathTwo.current, { scaleY: 0 });
		gsap
			.timeline({
				scrollTrigger: {
					trigger: trigger.current,
					toggleActions: "play pause resume pause",
					scrub: true,
					start: "top bottom",
					end: "centre",
				},
			})
			.to(convertedPath, { morphSVG: pathTwo.current, ease: Power1.easeOut, duration: 1 });
	}, []);
	return (
		<div className={styles["wavy-line"]}>
			<div ref={trigger} className={styles.trigger}></div>
			<svg
				className="white_shape"
				id="white_shape"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 1200 59.3"
			>
				<rect ref={path} id="white_shape_path1" x="0" y="50%" width="1200" height="100"></rect>
				<path
					ref={pathTwo}
					opacity="1"
					className={styles["path-two"]}
					id="white_shape_path2"
					d="M0,41.7c0,0,137-71.3,466-27.3C801,59.1,998,69.7,1200,29v1071.3H0V41.7z"
				></path>
			</svg>
		</div>
	);
};

export default WavyLine;
