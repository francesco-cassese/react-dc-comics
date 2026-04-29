import ActionElem from "../data/actionElem.js";

function ActionNavbar() {
    const listaJsx = ActionElem.map(elem => {
        const { id, text, img } = elem;
        return (
            <li key={id}>
                <a href="#">
                    <img src={img} alt={text} />
                    <span>{text}</span>
                </a>
            </li>
        )
    });

    return <div className="main-navbar">
        <ul className="action-bar-list">
            {listaJsx}
        </ul>
    </div>
};

export default ActionNavbar;