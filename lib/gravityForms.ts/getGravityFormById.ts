import { GET_GRAVITY_FORM_BY_ID } from "../../queries/gravityForms/queryGravityFromById";

import type { GfForm } from "../../types/graphql";
import { getApolloClient } from "../apollo-client";

/**
 * gerGravityFormById
 *
 * @author Brian Whelan
 *
 * @param {number} formId The id for the Gravity form
 * @returns The gravity form object
 */

export type GravityFormQueryResponse = {
	gfForm: GfForm;
};

const getGravityFormById = async (formId: number): Promise<GfForm | undefined> => {
	const appolloClient = getApolloClient();

	const { data } = await appolloClient.query<GravityFormQueryResponse>({
		query: GET_GRAVITY_FORM_BY_ID,
		variables: { formId },
	});

	return data?.gfForm;
};

export default getGravityFormById;
