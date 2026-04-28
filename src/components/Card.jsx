import comics from "../data/comics.js";

function Card() {
    const listCardJsx = comics.map(comic => {
        const { id, title, thumb } = comic;
        return (
            <figure key={id}>
                <img src={thumb} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        )
    });
    return <article className="comic-thumb">
        {listCardJsx}
    </article>
}
export default Card