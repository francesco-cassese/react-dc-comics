import socialLinks from "../data/socialLink.js";
import ListaImg from "./reusable/ListaImg.jsx";


function FooterSocial() {
    return (
        <section className="footer-social">
            <div className="social-wrapper">

                {/* Parte sinistra */}
                <div className="footer-btn-sign">
                    <button>SIGN-UP NOW!</button>
                </div>

                {/* Parte destra */}
                <div className="footer-icons">
                    <span>FOLLOW US</span>
                    <ListaImg elements={socialLinks} />
                </div>

            </div>
        </section>
    );
}

export default FooterSocial;