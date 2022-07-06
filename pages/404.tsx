import { GetStaticProps } from "next";
import Main from "../components/Main";

import Header from "../components/Header";
import BlobsCanvas from "../components/HeaderBlobs/BlobsCanvas";
import Nav from "../components/Nav";

import { getAllMenus } from "../lib/menus/getAllMenus";
import { Menu } from "../types/graphql";
import CtaButton from "../components/CtaButton";
import Image from "next/image";

import styles from "../styles/modules/FourOFour.module.scss";

const FourOFour = () => {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Main>
				<BlobsCanvas slug={"404"} />

				<div className={styles.content}>
					<h1 className="">Sorry Folks.</h1>
					<p>That's a 404.</p>
					<CtaButton url="/" title="Go Home" colour="white" />
				</div>
				<div className={styles.image}>
					<Image
						src="/images/travolta-loop.gif"
						alt=""
						height={100}
						width={100}
						layout="responsive"
						objectFit="cover"
						objectPosition="0 0"
					/>
				</div>
			</Main>
		</>
	);
};

export default FourOFour;

export type FourOFourStaticProps = {
	props: {
		menus: Array<Menu>;
	};
};

export const getStaticProps: GetStaticProps = async (): Promise<FourOFourStaticProps> => {
	const { menus } = await getAllMenus();

	return {
		props: {
			menus,
		},
	};
};
