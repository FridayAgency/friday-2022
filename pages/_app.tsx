import "../styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import WpProvider, { WpState } from "../components/context/wordpressContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
	// Extract the menus and recent posts so we can add  them to the wp context
	const { menus, footerData, ...passThroughProps }: WpState = pageProps;

	// Create the state object to add as value to wpcontext
	const state = {
		menus,
		footerData,
	};

	const router = useRouter();

	return (
		<WpProvider value={state}>
			<Component {...passThroughProps} key={router.asPath} />
		</WpProvider>
	);
};

export default MyApp;
