import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

import styles from "./MethodAnimation.module.scss";
import Slider from "react-slick";

interface MethodAnimationProps {
	sliderRef: React.MutableRefObject<Slider>;
}

const MethodAnimation = ({ sliderRef }) => {
	const fridayRed: string = "#EE1C4A";
	const validateFill: string = "#464646";
	const moveBlob = useRef<SVGCircleElement>(null!);
	const blackCircleOne = useRef<SVGCircleElement>(null!);
	const blackCircleTwo = useRef<SVGCircleElement>(null!);
	const blackCircleThree = useRef<SVGCircleElement>(null!);
	const blackCircleFour = useRef<SVGCircleElement>(null!);
	const blackCircleFive = useRef<SVGCircleElement>(null!);
	const blackCircleSix = useRef<SVGCircleElement>(null!);
	const pathOne = useRef<SVGPathElement>(null!);
	const pathTwo = useRef<SVGPathElement>(null!);
	const pathThree = useRef<SVGPathElement>(null!);
	const pathFour = useRef<SVGPathElement>(null!);
	const pathFive = useRef<SVGPathElement>(null!);
	const pathSix = useRef<SVGPathElement>(null!);

	useEffect(() => {
		gsap.set(moveBlob.current, { transformOrigin: "50% 50%" });
		const animateBlob = gsap
			.timeline({ repeat: -1, yoyo: false })
			.set(moveBlob.current, { x: 190, y: 55.5 })
			.set(blackCircleOne.current, { fill: fridayRed })
			.to(moveBlob.current, {
				motionPath: { path: pathOne.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleOne.current, { fill: "#000", duration: 0.5, ease: Linear.easeNone }, "-=1.5")
			.to(
				blackCircleTwo.current,
				{ duration: 0.5, fill: validateFill, ease: Linear.easeNone },
				"-=1"
			)
			.to(moveBlob.current, {
				motionPath: { path: pathTwo.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleTwo.current, { duration: 0.5, fill: "#000", ease: Linear.easeNone }, "-=1.5")
			.to(
				blackCircleThree.current,
				{ duration: 0.5, fill: fridayRed, ease: Linear.easeNone },
				"-=1.5"
			)
			.to(moveBlob.current, {
				motionPath: { path: pathThree.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleThree.current, { fill: "#000", duration: 0.5, ease: Linear.easeNone }, "-=1.5")
			.to(
				blackCircleFour.current,
				{ duration: 0.5, fill: validateFill, ease: Linear.easeNone },
				"-=1"
			)
			.to(moveBlob.current, {
				motionPath: { path: pathFour.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleFour.current, { duration: 0.5, fill: "#000", ease: Linear.easeNone }, "-=1.5")
			.to(
				blackCircleFive.current,
				{ duration: 0.5, fill: fridayRed, ease: Linear.easeNone },
				"-=1.5"
			)
			.to(moveBlob.current, {
				motionPath: { path: pathFive.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleFive.current, { duration: 0.5, fill: "#000", ease: Linear.easeNone }, "-=1.5")

			.to(
				blackCircleSix.current,
				{ duration: 0.5, fill: validateFill, ease: Linear.easeNone },
				"-=1"
			)
			.to(moveBlob.current, {
				motionPath: { path: pathSix.current },
				duration: 2,
				ease: Linear.easeNone,
			})
			.to(blackCircleSix.current, { duration: 0.5, fill: "#000", ease: Linear.easeNone }, "-=1.5")
			.to(blackCircleOne.current, { duration: 0.5, fill: fridayRed, ease: Linear.easeNone }, "-=1");
	}, []);

	return (
		<div className={styles.animation}>
			<svg
				version="1.1"
				className={styles["circles_svg"]}
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 380 380"
			>
				<defs>
					<filter id="goo" colorInterpolationFilters="sRGB">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="5"
							colorInterpolationFilters="sRGB"
							result="blur"
						></feGaussianBlur>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -18"
							result="cm"
						></feColorMatrix>
					</filter>
				</defs>
				<g filter="url(#goo)">
					<circle
						className={`${styles.circle} ${styles.large} ${styles.red} ${styles.one}`}
						cx="190"
						cy="78"
						r="75"
					></circle>
					<circle
						className={`${styles.circle} ${styles.small} ${styles.red} ${styles.two}`}
						cx="298.4"
						cy="145"
						r="44"
					></circle>
					<circle
						className={`${styles.circle} ${styles.large} ${styles.red} ${styles.three}`}
						cx="301.4"
						cy="271.5"
						r="75"
					></circle>
					<circle
						className={`${styles.circle} ${styles.small} ${styles.red} ${styles.four}`}
						cx="190"
						cy="332"
						r="44"
					></circle>
					<circle
						className={`${styles.circle} ${styles.large} ${styles.red} ${styles.tfive}`}
						cx="77.8"
						cy="271.5"
						r="75"
					></circle>
					<circle
						className={`${styles.circle} ${styles.small} ${styles.red} ${styles.six}`}
						cx="80.9"
						cy="144.3"
						r="44"
					></circle>
					<circle
						ref={moveBlob}
						className={`${styles.circle} ${styles.small} ${styles.moving} `}
						r="20"
					></circle>
				</g>
			</svg>

			<svg
				version="1.1"
				className={styles["circles_svg_black"]}
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 380 380"
			>
				<g>
					<g>
						<circle
							ref={blackCircleOne}
							className={`${styles.circle} ${styles.large} ${styles.black} ${styles.one}`}
							cx="190"
							cy="78"
							r="69"
						></circle>
					</g>
					<g>
						<circle
							ref={blackCircleTwo}
							className={`${styles.circle} ${styles.small} ${styles.black} ${styles.two}`}
							cx="298.4"
							cy="144.8"
							r="39"
						></circle>
					</g>
					<g>
						<circle
							ref={blackCircleThree}
							className={`${styles.circle} ${styles.large} ${styles.black} ${styles.three}`}
							cx="301.4"
							cy="271.5"
							r="69"
						></circle>
					</g>
					<g>
						<circle
							ref={blackCircleFour}
							className={`${styles.circle} ${styles.small} ${styles.black} ${styles.four}`}
							cx="190"
							cy="332"
							r="39"
						></circle>
					</g>
					<g>
						<circle
							ref={blackCircleFive}
							className={`${styles.circle} ${styles.large} ${styles.black} ${styles.five}`}
							cx="77.8"
							cy="271.5"
							r="69"
						></circle>
					</g>
					<g>
						<circle
							ref={blackCircleSix}
							className={`${styles.circle} ${styles.small} ${styles.black} ${styles.six}`}
							cx="80.9"
							cy="144.3"
							r="39"
						></circle>
					</g>
				</g>
			</svg>

			<svg
				version="1.1"
				className={styles["rollover_circles"]}
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 380 380"
			>
				<g>
					<g onClick={() => sliderRef.current.slickGoTo(0)} id="method_show_discovery">
						<circle
							className={`${styles.circle} ${styles.rollover} ${styles.large} ${styles.one}`}
							cx="190"
							cy="78"
							r="75"
						></circle>
						<text transform="matrix(1 0 0 1 136 84)" className={`${styles.copy} ${styles.large} `}>
							DISCOVERY
						</text>
					</g>
					<g>
						<circle
							className={`${styles.circle} ${styles.two} `}
							cx="298.4"
							cy="144.8"
							r="41"
						></circle>
						<text
							transform="matrix(1 0 0 1 270.5 150)"
							className={`${styles.copy} ${styles.small} `}
						>
							VALIDATE
						</text>
					</g>
					<g onClick={() => sliderRef.current.slickGoTo(1)} id="method_show_strategy">
						<circle
							className={`${styles.circle} ${styles.rollover} ${styles.large} ${styles.three}`}
							cx="301.4"
							cy="271.5"
							r="75"
						></circle>
						<text
							transform="matrix(1 0 0 1 255 277.5)"
							className={`${styles.copy} ${styles.large} `}
						>
							STRATEGY
						</text>
					</g>
					<g>
						<circle
							className={`${styles.circle} ${styles.four} `}
							cx="190"
							cy="332"
							r="41"
						></circle>
						<text
							transform="matrix(1 0 0 1 160.909 336.9998)"
							className={`${styles.copy} ${styles.small} `}
						>
							VALIDATE
						</text>
					</g>
					<g onClick={() => sliderRef.current.slickGoTo(2)} id="method_show_design">
						<circle
							className={`${styles.circle} ${styles.rollover} ${styles.large} ${styles.five}`}
							cx="77.8"
							cy="271.5"
							r="75"
						></circle>
						<text
							transform="matrix(1 0 0 1 43.8 277.5)"
							className={`${styles.copy} ${styles.large} `}
						>
							DESIGN
						</text>
					</g>
					<g>
						<circle
							className={`${styles.circle} ${styles.six} `}
							cx="80.9"
							cy="144.3"
							r="41"
						></circle>
						<text
							transform="matrix(1 0 0 1 53.5 150)"
							className={`${styles.copy} ${styles.small} `}
						>
							VALIDATE
						</text>
					</g>
				</g>
			</svg>

			<svg
				version="1.1"
				className={styles["blob_path"]}
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 380 380"
			>
				<path
					ref={pathSix}
					className="path_guide"
					d="M57.7,140.4c23-50.1,73.6-84.9,132.3-84.9"
				></path>
				<path
					ref={pathFive}
					className="path_guide"
					d="M71.3,285.2c-16.9-23.8-26.8-52.8-26.8-84.2c0-21.6,4.7-42.1,13.2-60.6"
				></path>
				<path
					ref={pathFour}
					className="path_guide"
					d="M190,346.5c-49,0-92.3-24.2-118.7-61.3"
				></path>
				<path
					ref={pathThree}
					className="path_guide"
					d="M309,284.7c-26.3,37.4-69.8,61.8-119,61.8"
				></path>
				<path
					ref={pathTwo}
					className="path_guide"
					d="M322.3,140.4c8.5,18.4,13.2,39,13.2,60.6c0,31.2-9.8,60-26.5,83.7"
				></path>
				<path
					ref={pathOne}
					className="path_guide"
					d="M190,55.5c58.7,0,109.3,34.8,132.3,84.9"
				></path>
			</svg>
		</div>
	);
};

export default MethodAnimation;
