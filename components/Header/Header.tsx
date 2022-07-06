/**
 * @author Brian Whelan
 *
 * @param {React.ReactNode} children The children of the component
 * @returns A styled header tag
 */

interface HeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return <header>{children}</header>;
};

export default Header;
