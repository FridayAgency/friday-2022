import { gql } from "@apollo/client";
import { MENUITEM_FIELD } from "./menuItemFieldFragment";

export const QUERY_ALL_MENUS = gql`
	${MENUITEM_FIELD}
	query QUERY_ALL_MENUS {
		menus {
			edges {
				node {
					name
					id
					slug
					locations
					menuItems(first: 100) {
						edges {
							node {
								...MenuItemFields
								childItems {
									edges {
										node {
											...MenuItemFields
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
