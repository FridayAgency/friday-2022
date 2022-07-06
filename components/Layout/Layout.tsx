import Footer from "../Footer";
import Header from "../Header";

import Main from "../Main";
import Nav from "../Nav";

/**
 * @author Brian Whelan
 *
 * @param {React.ReactChildren} children The components childre
 *
 * @returns Common Layout with the Header and site menu, and Footer
 */

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
