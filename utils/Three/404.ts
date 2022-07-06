import { gsap, Back, Power1 } from "gsap";

import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";

var animated404 = false;
var _404TweenVars = {
	x1: 0.3,
	y1: 0.7,
	z1: 0.4,

	x2: 0.7,
	y2: 0.7,
	z2: 0.4,

	x3: 0.25,
	y3: 0.3,
	z3: 0.05,

	x4: 0.35,
	y4: 0.35,
	z4: 0.05,

	x5: 0.45,
	y5: 0.38,
	z5: 0.05,

	x6: 0.55,
	y6: 0.38,
	z6: 0.05,

	x7: 0.65,
	y7: 0.35,
	z7: 0.05,

	x8: 0.75,
	y8: 0.3,
	z8: 0.05,

	x9: 0.7,
	y9: 0.75,
	z9: 0.05,

	x10: 0.5,
	y10: 1.2,
	z10: 0.05,
}; // Start at (0, 1)

const animate404Blobs = () => {
	if (animated404 == false) {
		animated404 = true;
		// Face 1
		gsap.timeline({ delay: 1 }).from(_404TweenVars, {
			duration: 1,
			x1: 0.3,
			y1: 0.45,
			z1: 0.2,

			x3: 0.5,
			y3: 0.35,
			z3: 0.5,

			x5: 0.5,
			y5: 0.35,
			z5: 0.35,

			x7: 0.65,
			y7: 0.25,
			z7: 0.45,

			ease: Back.easeIn.config(1.7),
		});

		// Face 2
		gsap.timeline({ delay: 1, onComplete: startCrying }).from(_404TweenVars, {
			duration: 1.5,
			x2: 0.5,
			y2: 0.45,
			z2: 0.05,

			x4: 0.5,
			y4: 0.45,
			z4: 0.1,

			x6: 0.8,
			y6: 0.37,
			z6: 0.3,

			x8: 0.7,
			y8: 0.37,
			z8: 0.25,

			//tear
			x9: 0.5,
			y9: 0.45,
			z9: 0.01,

			ease: Back.easeIn.config(1.7),
		});
	}
};

const startCrying = () => {
	// Cry
	gsap.timeline({ delay: 0, repeat: -1, yoyo: false, repeatDelay: 1 }).to(_404TweenVars, {
		duration: 1.5,
		y9: -0.1,
		ease: Power1.easeIn,
	});
	// Wobble
	gsap.timeline({ delay: 0, repeat: -1, yoyo: true }).to(_404TweenVars, {
		duration: 0.1,
		y5: 0.39,
		y6: 0.37,
	});
};

export const render404Blobs = (effect: MarchingCubes) => {
	//camera.zoom=1;
	// camera.fov = 65;
	// camera.updateProjectionMatrix();

	_404Blobs(
		effect,

		_404TweenVars.x1,
		_404TweenVars.x2,
		_404TweenVars.x3,
		_404TweenVars.x4,
		_404TweenVars.x5,
		_404TweenVars.x6,
		_404TweenVars.x7,
		_404TweenVars.x8,
		_404TweenVars.x9,

		_404TweenVars.y1,
		_404TweenVars.y2,
		_404TweenVars.y3,
		_404TweenVars.y4,
		_404TweenVars.y5,
		_404TweenVars.y6,
		_404TweenVars.y7,
		_404TweenVars.y8,
		_404TweenVars.y9,

		_404TweenVars.z1,
		_404TweenVars.z2,
		_404TweenVars.z3,
		_404TweenVars.z4,
		_404TweenVars.z5,
		_404TweenVars.z6,
		_404TweenVars.z7,
		_404TweenVars.z8,
		_404TweenVars.z9
	);
	//start tweening pos vars
	animate404Blobs();
};

const _404Blobs = function (
	object: MarchingCubes,

	updateX1: number,
	updateX2: number,
	updateX3: number,
	updateX4: number,
	updateX5: number,
	updateX6: number,
	updateX7: number,
	updateX8: number,
	updateX9: number,

	updateY1: number,
	updateY2: number,
	updateY3: number,
	updateY4: number,
	updateY5: number,
	updateY6: number,
	updateY7: number,
	updateY8: number,
	updateY9: number,

	updateZ1: number,
	updateZ2: number,
	updateZ3: number,
	updateZ4: number,
	updateZ5: number,
	updateZ6: number,
	updateZ7: number,
	updateZ8: number,
	updateZ9: number
) {
	object.reset();
	// fill the field with some metaballs

	const subtract: number = 24;
	const strength: number = 1.2;

	object.addBall(updateX1, updateY1, updateZ1, strength, subtract);
	object.addBall(updateX2, updateY2, updateZ2, strength, subtract);

	object.addBall(updateX3, updateY3, updateZ3, strength, subtract);
	object.addBall(updateX4, updateY4, updateZ4, strength, subtract);
	object.addBall(updateX5, updateY5, updateZ5, strength, subtract);

	object.addBall(updateX6, updateY6, updateZ6, strength, subtract);
	object.addBall(updateX7, updateY7, updateZ7, strength, subtract);
	object.addBall(updateX8, updateY8, updateZ8, strength, subtract);

	object.addBall(updateX9, updateY9, updateZ9, 0.5, subtract);
};
