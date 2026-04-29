import ActionElem from "../data/actionElem.js";

function ActionNavbar() {
    const listaJsx = ActionElem.map(elem => {
        const { id, text, img } = elem;
        return (
            <div className="main-navbar">
                <li key={id}>
                    <a href="#">
                        <img src={img} alt={text} />
                        <span>{text}</span>
                    </a>
                </li>
            </div>
        )
    });

    return <ul className="action-bar-list">
        {listaJsx}
    </ul>
};

export default ActionNavbar;