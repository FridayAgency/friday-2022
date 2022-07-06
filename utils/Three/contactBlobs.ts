import { gsap, Power1 } from "gsap";
import type { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";

let animatedContact = false;
const contactTweenVars = {
	x1: 0.15,
	x2: 0.5,
	x3: 0.85,
	y1: 0.5,
	y2: 0.5,
	y3: 0.5,
	z1: 0.2,
	z2: 0.2,
	z3: 0.2,
}; // Start at (0, 1)

const animateContactBlobs = () => {
	if (animatedContact == false) {
		animatedContact = true;
		//animate properties x,y,z to pass to home_blobs function on update
		//1. bring in balls from side
		gsap.timeline({ delay: 0.5, repeat: -1, yoyo: true }).to(contactTweenVars, {
			x1: 0.5,
			z1: 0.7,
			ease: Power1.easeInOut,
			duration: 3,
		});
		gsap.timeline({ delay: 0.5, repeat: -1, yoyo: true }).to(contactTweenVars, {
			z2: 0.7,
			ease: Power1.easeInOut,
			duration: 3,
		});
		gsap.timeline({ delay: 0.5, repeat: -1, yoyo: true }).to(contactTweenVars, {
			x3: 0.5,
			z3: 0.7,
			ease: Power1.easeInOut,
			duration: 3,
		});
	}
};

export const renderContactBlobs = (effect: MarchingCubes) => {
	contactBlobs(
		effect,
		contactTweenVars.x1,
		contactTweenVars.x2,
		contactTweenVars.x3,
		contactTweenVars.y1,
		contactTweenVars.y2,
		contactTweenVars.y3,
		contactTweenVars.z1,
		contactTweenVars.z2,
		contactTweenVars.z3
	);
	//start tweening pos vars
	animateContactBlobs();
};

const contactBlobs = (
	object: MarchingCubes,
	updateX1: number,
	updateX2: number,
	updateX3: number,
	updateY1: number,
	updateY2: number,
	updateY3: number,
	updateZ1: number,
	updateZ2: number,
	updateZ3: number
) => {
	object.reset();
	// fill the field with some metaballs
	const subtract = 12;
	const strength = 1.2;
	object.addBall(updateX1, updateY1, updateZ1, strength, subtract);
	object.addBall(updateX2, updateY2, updateZ2, strength, subtract);
	object.addBall(updateX3, updateY3, updateZ3, strength, subtract);
};
