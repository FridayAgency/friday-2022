import { gql } from "@apollo/client";

export const GET_AUTH_TOKEN = gql`
	mutation LOGIN($input: LoginInput!) {
		login(input: $input) {
			authToken
		}
	}
`;
