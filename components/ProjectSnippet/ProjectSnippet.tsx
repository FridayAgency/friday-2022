import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectSnippet.module.scss";
import { MediaItem } from "../../types/graphql";

interface ProjectsProps {
	url: string;
	headerImage: MediaItem;
	clientLogo: MediaItem;
	title: string;
	priority?: boolean;
}

const ProjectSnippet: React.FC<ProjectsProps> = ({
	url,
	headerImage,
	clientLogo,
	title,
	priority = false,
}) => {
	return (
		<Link href={url}>
			<a>
				<div className={styles.container}>
					<div className={styles.image}>
						<Image
							src={headerImage?.sourceUrl}
							alt={headerImage?.altText}
							layout="fill"
							objectFit="cover"
							priority={priority}
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.logo}>
							<Image
								src={clientLogo?.sourceUrl}
								alt={clientLogo?.altText}
								height={60}
								width={170}
								layout="responsive"
								sizes="50vw"
								objectFit="contain"
								objectPosition="0 0"
								priority={priority}
							/>
						</div>
						<div className={styles.title}>{title}</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default ProjectSnippet;
