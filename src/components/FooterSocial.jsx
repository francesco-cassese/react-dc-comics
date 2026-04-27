import SocialLinks from "./FooterSocialLinks.jsx";

function FooterSocial() {
    return (
        <section className="footer-social-bg">
            <div className="container social-wrapper">
                
                {/* Parte sinistra */}
                <div className="footer-btn-sign">
                    <button>SIGN-UP NOW!</button>
                </div>

                {/* Parte destra */}
                <div className="footer-icons">
                    <span>FOLLOW US</span>
                    <SocialLinks />
                </div>

            </div>
        </section>
    );
}

export default FooterSocial;