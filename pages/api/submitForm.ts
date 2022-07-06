import type { NextApiRequest, NextApiResponse } from "next";
import { SUBMIT_FORM } from "../../queries/gravityForms/submitFormMutation";
import { useMutation } from "@apollo/client";
import { registerLocale } from "i18n-iso-countries";

const submitForm = async (req: NextApiRequest, res: NextApiResponse) => {
	const captchaToken = JSON.parse(req.body).captchaToken;

	let url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;

	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
			},
			method: "POST",
		}
	);
	const captchaValidation = await response.json();

	return res.status(200).json(captchaValidation);
};

export default submitForm;
