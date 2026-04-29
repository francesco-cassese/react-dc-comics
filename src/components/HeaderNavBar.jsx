import ListaLink from "./reusable/ListaLink.jsx";

function HeaderNavBar(props) {
    console.log(props.linksNavbar)
    return (
        <nav className="header-menu">
            <ListaLink links={props.linksNavbar} />
        </nav>
    )
};

export default HeaderNavBar;