import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Blobs } from "./Blobs";
import { Color } from "three";

interface BlobsCanvasProps {
	slug: string;
}

const BlobsCanvas: React.FC<BlobsCanvasProps> = ({ slug }) => {
	return (
		<Canvas
			style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
			linear
			flat={true}
			legacy={true}
			dpr={typeof window !== "undefined" ? window.devicePixelRatio : [1, 1]}
			camera={{
				position: [0, 0, 900],
				near: 100,
				far: 10000,
				fov: 45,
			}}
			onCreated={({ gl }) => {
				gl.localClippingEnabled = true;
			}}
			performance={{ max: 0.5 }}
		>
			<color attach="background" args={[0xff163c]} />
			<ambientLight color={new Color(0xffffff)} intensity={0.9} />
			<directionalLight color={new Color(0xff163c)} position={[0, 1, 0]} intensity={0.05} />
			<pointLight
				color={new Color(0xff163c).setHSL(0, 0, 0)}
				position={[0.2, 0.2, 1.0]}
				intensity={0.2}
			/>
			<Suspense fallback={null}>
				<Blobs position={[0, 0, 1000]} slug={slug} />
			</Suspense>
		</Canvas>
	);
};

export default BlobsCanvas;
