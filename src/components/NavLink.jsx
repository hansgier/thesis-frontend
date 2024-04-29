export const NavLink = ({ to, onClick, children, ...rest }) => {
    return (
        <a href={ to } onClick={ onClick } { ...rest }>
            { children }
        </a>
    );
};