import { getApolloClient } from "../apollo-client";
import { QUERY_ALL_MENUS } from "../../queries/menus/queryAllMenus";
import type { Menu } from "../../types/graphql";

/**
 *  getAllMenus
 *
 * @author Brian Whelan
 *
 * @returns An array of all the sites menus
 */

export type MenuNode = {
	node: Menu;
};

export type AllMenusQueryResponse = {
	menus: {
		edges: Array<MenuNode>;
	};
};

export type Menus = {
	menus: Array<Menu>;
};

export const getAllMenus = async (): Promise<Menus> => {
	const apolloClient = getApolloClient();

	const data = await apolloClient.query<AllMenusQueryResponse>({
		query: QUERY_ALL_MENUS,
	});

	const menus = data?.data.menus.edges.map((menu) => {
		const { node } = menu;
		return { ...node };
	});

	return {
		menus,
	};
};
