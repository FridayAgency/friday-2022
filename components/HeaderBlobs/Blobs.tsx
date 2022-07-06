import { useEffect, useRef, useMemo } from "react";
import type { Mesh, PerspectiveCamera, Scene } from "three";
import { MeshPhongMaterial } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes";
import { useTexture } from "@react-three/drei";
import { renderHomeBlobs } from "../../utils/Three/homeBlobs";
import { renderBlogMeetballs } from "../../utils/Three/blogBlobs";
import { renderAgencyBlobs } from "../../utils/Three/agency";
import { renderExpertiseBlobs } from "../../utils/Three/expertise";
import { renderContactBlobs } from "../../utils/Three/contactBlobs";
import { render404Blobs } from "../../utils/Three/404";

export const Blobs = ({ position, slug }) => {
	const blobRef = useRef<Mesh>(null!);
	const ref = useRef<MarchingCubes>(null!);

	const texture = useTexture("/images/three_texture_friday.jpg");

	const { scene, camera }: { scene: Scene; camera: PerspectiveCamera } = useThree();

	const init = useMemo(() => {
		ref.current = new MarchingCubes(
			64,
			new MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 0, map: texture }),
			true,
			true,
			30000
		);

		ref.current.position.set(0, 0, 0);
		ref.current.scale.set(500, 500, 500);
		ref.current.isolation = 80;

		return () => scene.remove(ref.current);
	}, [ref, scene, texture]);

	useEffect(() => {
		init();
		scene.add(ref.current);
	}, [init]);

	if (slug === "home") {
		useFrame(({ clock }) => {
			renderHomeBlobs(ref.current);
		});
	} else if (slug === "blog") {
		useFrame(() => renderBlogMeetballs(ref.current));
	} else if (slug === "agency") {
		useFrame(({ clock }) => {
			const time: number = clock.getElapsedTime() * 0.6 * 0.5;
			renderAgencyBlobs(ref.current, time);
		});
	} else if (slug === "expertise") {
		useFrame(({ clock }) => {
			camera.fov = 25;
			camera.updateProjectionMatrix();
			const time: number = clock.getElapsedTime() * 0.6 * 0.5;
			renderExpertiseBlobs(ref.current, time);
		});
	} else if (slug === "contact") {
		useFrame(() => renderContactBlobs(ref.current));
	} else if (slug === "404") {
		useFrame(() => {
			camera.fov = 65;
			camera.updateProjectionMatrix();
			render404Blobs(ref.current);
		});
	}

	return <mesh position={position} ref={blobRef}></mesh>;
};
