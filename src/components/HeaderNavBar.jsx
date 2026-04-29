import ListaLink from "./reusable/ListaLink.jsx";
import linkNavigazione from "../data/headerLinks.js";

function HeaderNavBar() {
    return (
        <nav className="header-menu">
            <ListaLink links={linkNavigazione} />
        </nav>
    )
};

export default HeaderNavBar;