import { gsap, Sine } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import type { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";

gsap.registerPlugin(CustomEase);

let animatedBlog = false;
const blogTweenVars = {
	x1: 0.15,
	y1: 1.2,
	z1: 0.3,

	x2: 0.35,
	y2: 1.2,
	z2: 0.3,

	x3: 0.5,
	y3: 1.2,
	z3: 0.3,

	x4: 0.7,
	y4: 1.2,
	z4: 0.3,

	x5: 0.8,
	y5: 1.2,
	z5: 0.3,

	x6: 0.15,
	y6: 1.2,
	z6: 0.3,

	x7: 0.35,
	y7: 1.2,
	z7: 0.3,

	x8: 0.6,
	y8: 1.2,
	z8: 0.3,

	x9: 0.72,
	y9: 1.2,
	z9: 0.3,

	x10: 0.5,
	y10: 1.2,
	z10: 0.3,
}; // Start at (0, 1)

const animateBlogMeatballs = () => {
	if (animatedBlog == false) {
		var customBounceEase = CustomEase.create(
			"custom",
			"M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.475,0.89 0.548,0.89 0.666,0.89 0.719,0.981 0.726,0.998 0.788,0.914 0.844,0.938 0.868,0.938 0.902,0.938 0.986,0.987 1,1"
		);
		animatedBlog = true;
		//animate properties x,y,z to pass to home_blobs function on update
		//1. bring in balls from side
		gsap
			.timeline({ delay: 0, onComplete: gooeyBrain })
			.timeScale(0.75)
			.to(blogTweenVars, {
				y1: 0.35,
				z1: 0.2,
				ease: customBounceEase,
				duration: 1,
			})
			.to(
				blogTweenVars,
				{
					y2: 0.35,
					z2: 0.35,
					ease: customBounceEase,
					duration: 1,
				},
				"-=0.5"
			)
			.to(
				blogTweenVars,
				{
					y3: 0.35,
					z3: 0.2,
					ease: customBounceEase,
					duration: 1,
				},
				"-=1.5"
			)
			.to(
				blogTweenVars,
				{
					y4: 0.35,
					z4: 0.1,
					ease: customBounceEase,
					duration: 1.2,
				},
				"-=1.5"
			)
			.to(
				blogTweenVars,
				{
					y5: 0.35,
					z5: 0.3,
					ease: customBounceEase,
					duration: 1,
				},
				"-=2"
			)
			.to(
				blogTweenVars,
				{
					y6: 0.47,
					z6: 0.1,
					ease: customBounceEase,
					duration: 1,
				},
				"-=1"
			)
			.to(
				blogTweenVars,
				{
					y7: 0.55,
					z7: 0.15,
					ease: customBounceEase,
					duration: 1.5,
				},
				"-=1.5"
			)
			.to(
				blogTweenVars,
				{
					y8: 0.57,
					z8: 0.25,
					ease: customBounceEase,
					duration: 1,
				},
				"-=1"
			)
			.to(
				blogTweenVars,
				{
					y9: 0.55,
					z9: 0.1,
					ease: customBounceEase,
					duration: 1.2,
				},
				"-=0.5"
			)
			.to(
				blogTweenVars,
				{
					y10: 0.7,
					z10: 0.05,
					ease: customBounceEase,
					duration: 1,
				},
				"-=0.75"
			);
	}
};

var gooeyBrain = () => {
	const blogTweenBrain = gsap.timeline({ delay: 0, repeat: -1, yoyo: true });
	const blogTweenBrain2 = gsap.timeline({ delay: 0, repeat: -1, yoyo: true });
	blogTweenBrain.to(blogTweenVars, {
		z1: 0.2,
		z3: 0.5,
		z5: 0.35,
		x7: 0.45,
		z7: 0.45,
		z9: 0.2,
		ease: Sine.easeInOut,
		duration: 2,
	});

	blogTweenBrain2.to(blogTweenVars, {
		x2: 0.15,
		z2: 0.05,
		z4: 0.1,
		x6: 0.25,
		z6: 0.3,
		z8: 0.25,
		y10: 0.7,
		z10: 0.5,
		ease: Sine.easeInOut,
		duration: 3,
	});
};

export const renderBlogMeetballs = (effect: MarchingCubes) => {
	blogBlobs(
		effect,
		blogTweenVars.x1,
		blogTweenVars.x2,
		blogTweenVars.x3,
		blogTweenVars.x4,
		blogTweenVars.x5,
		blogTweenVars.x6,
		blogTweenVars.x7,
		blogTweenVars.x8,
		blogTweenVars.x9,
		blogTweenVars.x10,

		blogTweenVars.y1,
		blogTweenVars.y2,
		blogTweenVars.y3,
		blogTweenVars.y4,
		blogTweenVars.y5,
		blogTweenVars.y6,
		blogTweenVars.y7,
		blogTweenVars.y8,
		blogTweenVars.y9,
		blogTweenVars.y10,

		blogTweenVars.z1,
		blogTweenVars.z2,
		blogTweenVars.z3,
		blogTweenVars.z4,
		blogTweenVars.z5,
		blogTweenVars.z6,
		blogTweenVars.z7,
		blogTweenVars.z8,
		blogTweenVars.z9,
		blogTweenVars.z10
	);
	//start tweening pos vars
	animateBlogMeatballs();
};

const blogBlobs = function (
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
	updateX10: number,
	updateY1: number,
	updateY2: number,
	updateY3: number,
	updateY4: number,
	updateY5: number,
	updateY6: number,
	updateY7: number,
	updateY8: number,
	updateY9: number,
	updateY10: number,
	updateZ1: number,
	updateZ2: number,
	updateZ3: number,
	updateZ4: number,
	updateZ5: number,
	updateZ6: number,
	updateZ7: number,
	updateZ8: number,
	updateZ9: number,
	updateZ10: number
) {
	object.reset();
	// fill the field with some metaballs
	const subtract: number = 18;
	const strength: number = 1.2;
	let xPos = 0;
	object.addBall(updateX1, updateY1, updateZ1, strength, subtract);
	object.addBall(updateX2, updateY2, updateZ2, strength, subtract);
	object.addBall(updateX3, updateY3, updateZ3, strength, subtract);
	object.addBall(updateX4, updateY4, updateZ4, strength, subtract);
	object.addBall(updateX5, updateY5, updateZ5, strength, subtract);

	object.addBall(updateX6, updateY6, updateZ6, strength, subtract);
	object.addBall(updateX7, updateY7, updateZ7, strength, subtract);
	object.addBall(updateX8, updateY8, updateZ8, strength, subtract);
	object.addBall(updateX9, updateY9, updateZ9, strength, subtract);
	object.addBall(updateX10, updateY10, updateZ10, strength, subtract);
};
