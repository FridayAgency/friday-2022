import { createContext, useContext } from "react";

import { Menu } from "../../types/graphql";
import type { AcfOptionsCompanyDetails, AcfOptionsSocialMediaUrls } from "../../types/graphql";

/**
 * Context for the website state.
 *
 * @returns The menu array, and the footer data.
 */

export interface WpState {
	menus: Menu[];
	footerData: {
		acfOptionsCompanyDetails: AcfOptionsCompanyDetails;
		acfOptionsSocialMediaUrls: AcfOptionsSocialMediaUrls;
	};
}

const DEFAULT_STATE: WpState = {
	menus: [],
	footerData: {
		acfOptionsCompanyDetails: {},
		acfOptionsSocialMediaUrls: {},
	},
};

export const WpContext = createContext<WpState>(DEFAULT_STATE);

export const useWpContext = () => useContext<WpState>(WpContext);
interface WpProviderProps {
	value: WpState;
	children: React.ReactNode;
}

const WpProvider = ({ value, children }: WpProviderProps) => {
	return <WpContext.Provider value={value}>{children}</WpContext.Provider>;
};

export default WpProvider;
