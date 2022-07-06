import { GravityFormProvider } from "../../hooks/useGravityForm";

import { GfForm } from "../../types/graphql";
import GravityFormsForm from "./GravityFormsForm";

import styles from "./GravityForms.module.scss";

interface GravityFormProps {
	form: GfForm;
	className?: string;
}

const GravityForm = ({ className, form }: GravityFormProps): JSX.Element => {
	return (
		<GravityFormProvider>
			<div className={`${styles.gravityform} ${className ?? ""}`}>
				<GravityFormsForm form={form} />
			</div>
		</GravityFormProvider>
	);
};

export default GravityForm;
