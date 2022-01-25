import './Header.css';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <div className="navbar">
            <h3>React TypeScript Tutorial</h3>
        </div>
    );
};

export default Header;