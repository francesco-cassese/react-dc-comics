
const ActionElem = [
    {
        id: 1,
        text: "DIGITAL COMICS",
        img: "/img/buy-comics-digital-comics.png"
    },
    {
        id: 2,
        text: "DC MERCHANDISE",
        img: "/img/buy-comics-merchandise.png"
    },
    {
        id: 3,
        text: "SUBSCRIPTION",
        img: "/img/buy-comics-subscriptions.png"
    },
    {
        id: 4,
        text: "COMIC SHOP LOCATOR",
        img: "/img/buy-comics-shop-locator.png"
    },
    {
        id: 5,
        text: "DC POWER VISA",
        img: "/img/buy-dc-power-visa.svg"
    }
];

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

    return <ul className="action-bar-list">
        {listaJsx}
    </ul>
};

export default ActionNavbar;