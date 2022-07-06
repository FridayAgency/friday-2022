import styles from "./Main.module.scss";

/**
 * @author Brian Whelan
 *
 * @param {React.ReactElement} children The components children
 * @returns The styled main section
 */

interface MainProps {
	children: React.ReactElement | React.ReactElement[];
}

const Main: React.FC<MainProps> = ({ children }) => {
	return <main className={styles?.main}>{children}</main>;
};

export default Main;
