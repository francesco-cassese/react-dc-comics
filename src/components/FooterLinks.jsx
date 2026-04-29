import { dcComicsLinks, shopLinks, dcLinks, sitesLinks } from "../data/footerLinks.js";

function DcComics() {
    const listaDcComics = dcComicsLinks.map(link => {
        const { id, url, testo } = link
        return (
            <li key={id}>
                <a href={url}>{testo}</a>
            </li>
        );
    })
    return <>{listaDcComics}</>;
};

function Shop() {
    const listaShop = shopLinks.map(link => {
        const { id, url, testo } = link
        return (
            <li key={id}>
                <a href={url}>{testo}</a>
            </li>
        );
    })
    return <>{listaShop}</>;
};

function Dc() {
    const listaDc = dcLinks.map(link => {
        const { id, url, testo } = link;
        return (
            <li key={id}>
                <a href={url}>{testo}</a>
            </li>
        );
    });
    return <>{listaDc}</>;
}

function Sites() {
    const listaSites = sitesLinks.map(link => {
        const { id, url, testo } = link;
        return (
            <li key={id}>
                <a href={url}>{testo}</a>
            </li>
        );
    });
    return <>{listaSites}</>;
}

export { DcComics, Shop, Dc, Sites };