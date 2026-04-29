import { dcComicsLinks, dcLinks, shopLinks, sitesLinks } from "../data/footerLinks.js";
import ListaLink from "./reusable/ListaLink.jsx";


function FooterNav() {
    return (
        <div className="footer-columns">

            <div className="col">
                <h4>DC COMICS</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={dcComicsLinks} />
                </ul>

                <h4>SHOP</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={shopLinks} />
                </ul>
            </div>

            <div className="col">
                <h4>DC</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={dcLinks} />
                </ul>
            </div>

            <div className="col">
                <h4>SITES</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={sitesLinks} />
                </ul>
            </div>

        </div>
    );
}

export default FooterNav;


