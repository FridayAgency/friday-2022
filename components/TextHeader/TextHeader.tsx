import Section from "../Section";
import WavyLine from "../WavyLine";
import styles from "./TextHeader.module.scss";

interface TextHeaderProps {
	title: string;
	colour?: "primary" | "base";
	extraPadding?: Boolean;
	wavyLine?: Boolean;
}

const TextHeader = ({
	title,
	colour = "primary",
	extraPadding = false,
	wavyLine = true,
}: TextHeaderProps): JSX.Element => {
	return (
		<Section alignment="centre" bgColour={colour} customClass={styles["header-section"]}>
			<h1 className={`${styles.title} ${extraPadding ? styles["padding"] : ""}`}>{title}</h1>
			{wavyLine && <WavyLine />}
		</Section>
	);
};

export default TextHeader;
