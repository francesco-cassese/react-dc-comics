import ListaImg from "./reusable/ListaImg.jsx";


function FooterSocial(props) {
    console.log(props.linkSocial);
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
                    <ul>
                        <ListaImg elements={props.linkSocial} />
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default FooterSocial;