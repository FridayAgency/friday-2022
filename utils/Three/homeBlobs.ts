import { gsap, Sine, Back } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";
import { random } from "./random";

gsap.registerPlugin(CustomEase);

let animatedHome = false;

const homeTweenVars = {
	x1: 0,
	x2: 1,
	y1: 0.5,
	y2: 0.5,
	z1: 0.2,
	z2: 0.5,
};

const animateHomeBlobs = () => {
	if (animatedHome == false) {
		animatedHome = true;

		gsap.to(homeTweenVars, {
			x1: 0.55,
			x2: 0.45,
			y1: 0.55,
			y2: 0.45,
			z1: 0.55,
			z2: 0.45,
			duration: 4,
			ease: Back.easeOut.config(1.7),
			onComplete: function () {
				playpart2();
			},
		});
	}
};

const playpart2 = function () {
	gsap.to(homeTweenVars, {
		x1: random(0.4, 0.8),
		x2: random(0.2, 0.6),
		y1: random(0.45, 0.55),
		y2: random(0.45, 0.55),
		z1: random(0.45, 0.55),
		z2: random(0.45, 0.55),
		duration: 2,
		ease: Sine.easeInOut,
		onComplete: playpart2,
	});
};

const homeBlobs = (
	object: MarchingCubes,
	updateX1: number,
	updateX2: number,
	updateY1: number,
	updateY2: number,
	updateZ1: number,
	updateZ2: number
) => {
	object.reset();
	const subtract: number = 18;
	const strength: number = 2;
	object.addBall(updateX1, updateY1, updateZ1, strength, subtract);
	object.addBall(updateX2, updateY2, updateZ2, strength, subtract);
};

export const renderHomeBlobs = (effect: MarchingCubes) => {
	homeBlobs(
		effect,
		homeTweenVars.x1,
		homeTweenVars.x2,
		homeTweenVars.y1,
		homeTweenVars.y2,
		homeTweenVars.z1,
		homeTweenVars.z2
	);

	animateHomeBlobs();
};
