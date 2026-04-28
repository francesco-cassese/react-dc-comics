const linkNavigazione = [
    { id: 1, text: "CHARACTERS", url: "#" },
    { id: 2, text: "COMICS", url: "#" },
    { id: 3, text: "MOVIES", url: "#" },
    { id: 4, text: "TV", url: "#" },
    { id: 5, text: "GAMES", url: "#" },
    { id: 6, text: "COLLECTIBLES", url: "#" },
    { id: 7, text: "VIDEOS", url: "#" },
    { id: 8, text: "FANS", url: "#" },
    { id: 9, text: "NEWS", url: "#" },
    { id: 10, text: "SHOP", url: "#" }
];


function HeaderNavLinks() {
    const listaLinkHeaderJsx = linkNavigazione.map(link => {
        const { id, text, url } = link;
        return (
            <li key={id}>
                <a href={url}>
                    {text}
                </a>
            </li>
        )
    });
    return (
        <ul className="header-menu">
            {listaLinkHeaderJsx}
        </ul>
    )
};

export default HeaderNavLinks;

//    <li><a href="#">CHARACTERS</a></li>
//     <li><a href="#">COMICS</a></li>
//     <li><a href="#">MOVIES</a></li>
//     <li><a href="#">TV</a></li>
//     <li><a href="#">GAMES</a></li>
//     <li><a href="#">COLLECTIBLES</a></li>
//     <li><a href="#">VIDEOS</a></li>
//     <li><a href="#">FANS</a></li>
//     <li><a href="#">NEWS</a></li>
//     <li><a href="#">SHOP</a></li>