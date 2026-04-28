import comics from "../data/comics.js";

function Card() {
    const listCardJsx = comics.map(comic => {
        const { id, series, thumb } = comic;
        return (
            <figure key={id}>
                <img src={thumb} alt={series} />
                <figcaption>{series}</figcaption>
            </figure>
        )
    });
    return <article className="comic-thumb">
        {listCardJsx}
    </article>
}
export default Card