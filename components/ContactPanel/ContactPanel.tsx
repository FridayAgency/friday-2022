import { useRef } from "react";
import { GfForm, Page_Contactpage } from "../../types/graphql";
import ContactDetails from "../ContactDetails";
import Editor from "../Editor";
import GravityForm from "../GravityForms";
import Section from "../Section";

import styles from "./ContactPanel.module.scss";

/**
 * Contact Panel
 *
 * @author Brian Whelan
 *
 * @param {Page_Contactpage} contactPage The contact page object from the cms
 * @param {GfForm} form  The contact form
 *
 * @returns The contact panel for the contact page
 */

interface ContactPanelProps {
	contactPage: Page_Contactpage;
	form: GfForm;
}

const ContactPanel: React.FC<ContactPanelProps> = ({ contactPage, form }) => {
	const sectionRef = useRef<HTMLDivElement>(null!);

	const handleClick = () => {
		scrollTo({
			top: sectionRef.current.offsetHeight + 200,
			behavior: "smooth",
		});
	};

	return (
		<Section>
			<div ref={sectionRef} className={styles.wrapper}>
				<h2 className={styles.title}>{form?.title}</h2>
				<GravityForm form={form} className={styles.form} />
				<ContactDetails
					handleClick={handleClick}
					className={styles.details}
					address={contactPage?.contactCompanyAddress}
				/>
				<Editor copy={contactPage?.contactSecondaryContent} className={styles.secondary} />
			</div>
		</Section>
	);
};

export default ContactPanel;
