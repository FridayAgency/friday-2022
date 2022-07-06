import Section from "../../Section";

import type {
	Page_Pagepanels_PagePanels_OurClients,
	Page_Pagepanels_PagePanels_OurClients_OurClients,
	Project_Pagepanels_PagePanels_OurClients,
	Project_Pagepanels_PagePanels_OurClients_OurClients,
} from "../../../types/graphql";

import styles from "./OurClientsPanel.module.scss";
import Image from "next/image";
interface OurClientsPanelProps {
	panel: Page_Pagepanels_PagePanels_OurClients | Project_Pagepanels_PagePanels_OurClients;
}

const OurClientsPanel: React.FC<OurClientsPanelProps> = ({ panel }) => {
	const { ourClients } = panel;
	return (
		<Section padding="both">
			<h2 className={styles.title}>Featured Clients</h2>
			<div className={styles.clients}>
				{ourClients.map(
					(
						client:
							| Page_Pagepanels_PagePanels_OurClients_OurClients
							| Project_Pagepanels_PagePanels_OurClients_OurClients,
						index: number
					) => (
						<div key={`${client.__typename}-${index}`}>
							<Image
								src={client?.clientLogo?.sourceUrl}
								alt={client?.clientLogo?.altText}
								height={120}
								width={120}
								objectFit="contain"
							/>
						</div>
					)
				)}
			</div>
		</Section>
	);
};

export default OurClientsPanel;
