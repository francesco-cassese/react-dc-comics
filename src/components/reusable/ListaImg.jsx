function ListaImg(props) {
    const listaImgJsx = props.elements.map(element => {
        const { id, img, text } = element;
        return (
            <li key={id}>
                <a href="#">
                    <img src={img} alt={text} />
                </a>
            </li>
        )
    })
    return <ul>{listaImgJsx}</ul>
}
export default ListaImg