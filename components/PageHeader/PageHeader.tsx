import AnimatedHeader from "../AnimatedHeader";
import HeaderBlobs from "../HeaderBlobs";
import TextHeader from "../TextHeader";

interface PageHeaderProps {
	slug: string;
	title: string;
}

const PageHeader = ({ slug, title }: PageHeaderProps): JSX.Element => {
	if (slug === "blog" || slug === "agency" || slug === "expertise" || slug === "contact") {
		return <HeaderBlobs slug={slug} title={title} />;
	} else if (slug === "home") {
		return <AnimatedHeader />;
	} else {
		return <TextHeader title={title} colour="primary" />;
	}
};

export default PageHeader;
