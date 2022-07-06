import styles from "./Logo.module.scss";

/**
 * Logo
 * @param {string} colour The colour of the logo
 *
 * @returns The site logo
 */

interface LogoProps {
	colour: "white" | "red";
}

const Logo = ({ colour = "white" }: LogoProps): JSX.Element => {
	return (
		<div className={styles.logo}>
			<svg
				id="Layer_2"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 300 114"
				fill={colour === "white" ? "#fff" : "#FC1E42"}
			>
				<defs></defs>
				<polygon points="300 82.97 300 0 0 0 0 114 268.96 114 300 82.97" />
				<polygon
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					points="30.25 83.63 30.25 30.4 67.71 30.4 67.71 42.45 44.04 42.45 44.04 53.03 65.8 53.03 65.8 64.82 44.04 64.82 44.04 83.63 30.25 83.63"
				/>
				<path
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					d="M85.23,66v17.6H71.44V30.4H95.37c11.45,0,19.34,6.5,19.34,18.12,0,8.06-4.08,13.61-10.58,16l12.49,19.07H101.18L90.08,66Zm0-11.1H93.9c4.94,0,7.2-2.51,7.2-6.41s-2.26-6.42-7.2-6.42H85.23Z"
				/>
				<rect
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					x="118.7"
					y="30.4"
					width="13.96"
					height="53.22"
				/>
				<path
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					d="M138,30.4h20.12C174.89,30.4,185,40.8,185,57s-10.14,26.62-26.88,26.62H138Zm19.43,41.18c8.84,0,13.78-5.64,13.78-14.57s-4.94-14.65-13.78-14.65h-5.73V71.58Z"
				/>
				<path
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					d="M215,30.4l20.29,53.23H221.1l-3.81-10.32H198l-3.73,10.32H180.44L200.73,30.4ZM202.2,61.87h10.93l-5.47-15Z"
				/>
				<polygon
					fill={colour === "white" ? "#FC1E42" : "#fff"}
					points="257.96 30.4 272.61 30.4 253.36 64.73 253.36 83.63 239.4 83.63 239.4 64.73 220.5 30.4 235.59 30.4 246.77 51.21 257.96 30.4"
				/>
			</svg>
		</div>
	);
};

export default Logo;
