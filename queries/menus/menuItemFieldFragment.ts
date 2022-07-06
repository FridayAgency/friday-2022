import { gql } from "@apollo/client";

export const MENUITEM_FIELD = gql`
	fragment MenuItemFields on MenuItem {
		id
		label
		parentId
		path
		target
		title
	}
`;
