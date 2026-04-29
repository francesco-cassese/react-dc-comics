import { Shop, DcComics, Dc, Sites } from "./FooterLinks.jsx";

function FooterNav() {
    return (
        <div className="footer-columns">

            <div className="col">
                <h4>DC COMICS</h4>
                <ul className="footer-nav-list">
                    <DcComics />
                </ul>

                <h4>SHOP</h4>
                <ul className="footer-nav-list">
                    <Shop />
                </ul>
            </div>

            <div className="col">
                <h4>DC</h4>
                <ul className="footer-nav-list">
                    <Dc />
                </ul>
            </div>

            <div className="col">
                <h4>SITES</h4>
                <ul className="footer-nav-list">
                    <Sites />
                </ul>
            </div>

        </div>
    );
}

export default FooterNav;


