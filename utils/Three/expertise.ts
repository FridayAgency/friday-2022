import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";

export const renderExpertiseBlobs = (object: MarchingCubes, time: number) => {
	object.reset();
	let subtract: number, strength: number, i: number, bally: number, ballz: number;

	subtract = 24;

	strength = 1;
	var ballx = 0.15;

	for (i = 0; i < 6; i++) {
		bally = Math.abs(Math.cos(i + 1.12 * (time * 5) * Math.cos(1.22 + 0.1424 * i))) * 0.9; // dip into the floor

		ballz = 0.5;
		object.addBall(ballx, bally, ballz, strength, subtract);
		ballx += 0.15;
	}
};
