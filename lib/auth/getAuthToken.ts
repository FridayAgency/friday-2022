import { getApolloClient } from "../apollo-client";
import { GET_AUTH_TOKEN } from "../../queries/auth/authTokenMutation";
import { v4 } from "uuid";

import { LoginPayload } from "../../types/graphql";

export type Auth = {
	login: LoginPayload;
};

export const getAuthToken = async (): Promise<Auth> => {
	const apollo = getApolloClient();
	const { data } = await apollo.mutate({
		mutation: GET_AUTH_TOKEN,
		variables: {
			input: {
				clientMutationId: v4(),
				username: process.env.WORDPRESS_USERNAME || "",
				password: process.env.WORDPRESS_PASSWORD || "",
			},
		},
	});

	return data || {};
};
