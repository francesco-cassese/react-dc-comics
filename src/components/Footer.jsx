import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

function Footer() {
    return (
        <footer>
            {/* AREA SUPERIORE: Link + Logo */}
            <div className="footer-top">
                <div>
                    <FooterNav />
                    
                    <div className="footer-logo-bg">
                        <img src="/img/dc-logo-bg.png" alt="DC Logo Background" />
                    </div>
                </div>
            </div>

            {/* AREA INFERIORE: Social */}
            <div className="footer-bottom">
                <FooterSocial />
            </div>
        </footer>
    );
}

export default Footer;