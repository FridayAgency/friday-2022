import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./HeaderBlobs.module.scss";
import WavyLine from "../WavyLine";
import dynamic from "next/dynamic";
const BlobsCanvas = dynamic(() => import("./BlobsCanvas"), { ssr: false });

interface HeaderBlobsProps {
	slug: string;
	title: string;
}

const HeaderBlobs: React.FC<HeaderBlobsProps> = ({ slug, title }) => {
	const header = useRef<HTMLDivElement>(null!);
	const [mounted, setMounted] = useState<Boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	let height = "half";
	if (slug === "home") {
		height = "full";
	}

	const handleClick = () => {
		scrollTo({
			top: header.current.offsetHeight - 120,
			behavior: "smooth",
		});
	};

	return (
		<div ref={header} className={`${styles["blob-header"]} ${styles[height]}`}>
			{slug === "home" ? (
				<>
					<div className={styles.image}>
						<Image
							src="/images/one_plus_one.svg"
							objectFit="fill"
							layout="fill"
							priority={true}
							alt=""
						/>
					</div>
					<p className={styles["blob-header__subtitle"]}>
						When <span>User Experience</span> and <span>Digital Marketing</span> are integrated,
						amazing things happen.
					</p>
					<div className={styles.arrow} onClick={handleClick} />
				</>
			) : (
				<h1>{title}</h1>
			)}
			{!mounted ? null : (
				<Suspense fallback={null}>
					<BlobsCanvas slug={slug} />
				</Suspense>
			)}
			<WavyLine />
		</div>
	);
};

export default HeaderBlobs;
