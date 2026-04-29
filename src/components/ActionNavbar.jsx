import ActionElem from "../data/actionElem.js";
import ListaImg from "./reusable/ListaImg.jsx";

function ActionNavbar() {
    return <div className="main-navbar">
        <ul className="action-bar-list">
            <ListaImg elements={ActionElem} />
        </ul>
    </div>
};

export default ActionNavbar;