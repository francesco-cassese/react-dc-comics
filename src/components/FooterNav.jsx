import ListaLink from "./reusable/ListaLink.jsx";


function FooterNav(props) {
    console.log(props.linkList);

    const { dcComics, shop, dc, sites } = props.linkList;
    return (
        <div className="footer-columns">

            <div className="col">
                <h4>DC COMICS</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={dcComics} />
                </ul>

                <h4>SHOP</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={shop} />
                </ul>
            </div>

            <div className="col">
                <h4>DC</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={dc} />
                </ul>
            </div>

            <div className="col">
                <h4>SITES</h4>
                <ul className="footer-nav-list">
                    <ListaLink links={sites} />
                </ul>
            </div>

        </div>
    );
}

export default FooterNav;


