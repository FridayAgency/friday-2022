import Image from "next/image";

import styles from "./PostHeader.module.scss";

interface PostHeaderProps {
	imageUrl: string;
	title: string;
}

const PostHeader = ({ imageUrl, title }: PostHeaderProps): JSX.Element => {
	return (
		<div className={styles["post-header"]}>
			<div className={styles.overlay}></div>
			<Image src={imageUrl} priority={true} layout="fill" objectFit="cover" alt="" />
			<h1>{title}</h1>
		</div>
	);
};

export default PostHeader;
