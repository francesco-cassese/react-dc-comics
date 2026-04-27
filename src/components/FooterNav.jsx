
import { LinksComics, LinksShop, LinksDc, LinksSites } from "./FooterLinks";

function FooterNav() {
    return (
        <div className="footer-columns">
            <div className="col">
                <h4>DC COMICS</h4>
                <ul><LinksComics /></ul>
                
                <h4>SHOP</h4>
                <ul><LinksShop /></ul>
            </div>
            
            <div className="col">
                <h4>DC</h4>
                <ul><LinksDc /></ul>
            </div>
            
            <div className="col">
                <h4>SITES</h4>
                <ul><LinksSites /></ul>
            </div>
        </div>
    );
}

export default FooterNav;
