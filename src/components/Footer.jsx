import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="container"> 
                    <FooterNav />              
                    <div className="footer-logo-bg">
                        <img src="/img/dc-logo-bg.png" alt="DC Logo Background" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <FooterSocial />
                </div>
            </div>
        </footer>
    );
}

export default Footer;