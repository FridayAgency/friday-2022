import { useState } from "react";
import type {
	Page_Pagepanels_PagePanels_1ColVideoLayout,
	Project_Pagepanels_PagePanels_1ColVideoLayout,
} from "../../../types/graphql";
import Section from "../../Section";

import styles from "./VideoPanel.module.scss";

interface VideoPanelProps {
	panel: Page_Pagepanels_PagePanels_1ColVideoLayout | Project_Pagepanels_PagePanels_1ColVideoLayout;
}

const VideoPanel = ({ panel }: VideoPanelProps): JSX.Element => {
	const [play, setPlay] = useState(false);

	const videoUrl = `${panel?.video.replace(
		"watch?v=",
		"embed/"
	)}?feature=oembed&controls=0&hd=1&autohide=1&enablejsapi=1&rel=0&showinfo=0`;

	const videoUrlAuto = `${panel?.video.replace(
		"watch?v=",
		"embed/"
	)}?feature=oembed&controls=0&hd=1&autohide=1&enablejsapi=1&rel=0&showinfo=0&autoplay=1`;

	const renderedUrl = play ? videoUrlAuto : videoUrl;

	const handleClick = () => setPlay(true);

	return (
		<Section fullWidth={true} padding={panel?.paddingTopBottom}>
			<div className={styles.video}>
				<div
					className={`${styles.background} ${play ? styles.hide : ""}`}
					style={{
						backgroundImage: `url(${panel?.posterImage?.sourceUrl ?? null})`,
					}}
				></div>
				<div className={styles.embed}>
					<img
						onClick={handleClick}
						className={`${styles.play} ${play ? styles.hide : ""}`}
						src="/images/icon-video-play.svg"
						alt="Play Video"
					/>
					<iframe
						src={renderedUrl}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				</div>
			</div>
		</Section>
	);
};

export default VideoPanel;
