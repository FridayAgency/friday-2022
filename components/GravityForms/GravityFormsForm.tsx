import { useMutation } from "@apollo/client";
import useGravityForm from "../../hooks/useGravityForm";
import { SUBMIT_FORM } from "../../queries/gravityForms/submitFormMutation";
import { GfForm, FormField, FieldError } from "../../types/graphql";
import GravityFormsField from "./GravityFormsField";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { getApolloClient } from "../../lib/apollo-client";
interface GravityFormFormProps {
	form: GfForm;
}

const GravityFormsForm = ({ form }: GravityFormFormProps): JSX.Element => {
	const recaptchaRef = useRef<ReCAPTCHA>(null!);
	const apolloClient = getApolloClient();
	const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM, { client: apolloClient });

	const haveEntryId = Boolean(data?.submitGfForm?.entry?.isSubmitted);

	const haveFieldErrors = Boolean(data?.submitGfForm?.errors?.length);

	const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors;

	const defaultConfirmation = form.confirmations?.find((confirmation) => confirmation?.isDefault);

	const formFields = form.formFields?.nodes || [];

	const { state } = useGravityForm();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (loading) return;

		const captchaToken = await recaptchaRef.current.executeAsync();
		recaptchaRef.current.reset();

		const response = await fetch("/api/submitForm", {
			method: "POST",
			body: JSON.stringify({
				captchaToken,
			}),
		});
		const data = await response.json();

		if (data.success) {
			submitForm({
				variables: {
					id: "1",
					fieldValues: state,
				},
			}).catch((error) => {
				console.error(error);
			});
		}
	};

	const getFieldErrors = (id: number): FieldError[] => {
		if (!haveFieldErrors) return [];
		return data?.submitGfForm?.errors.filter((error: FieldError) => error.id === id);
	};

	if (wasSuccessfullySubmitted) {
		return <p>{defaultConfirmation?.message || "Form successfully submitted - thank you."}</p>;
	}

	return (
		<form method="post" onSubmit={handleSubmit}>
			<ReCAPTCHA
				ref={recaptchaRef}
				sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
				size="invisible"
			/>
			{formFields.map((field) => (
				<GravityFormsField
					key={field?.id}
					field={field as FormField}
					fieldErrors={getFieldErrors(Number(field?.id))}
				/>
			))}
			{error && <p>{error?.message}</p>}
			<button type="submit">{form?.button?.text || "Submit"}</button>
		</form>
	);
};

export default GravityFormsForm;
