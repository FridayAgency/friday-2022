import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";

export const renderAgencyBlobs = (object: MarchingCubes, time: number) => {
	object.reset();

	let i: number, ballx: number, bally: number, ballz: number;
	const numblobs: number = 8;
	const subtract: number = 12;
	const strength: number = 1.5;

	for (i = 0; i < numblobs; i++) {
		ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
		bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77; // dip into the floor
		ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.3;

		object.addBall(ballx, bally, ballz, strength, subtract);
	}
};
