function ListaImg(props) {
    const listaImgJsx = props.elements.map(element => {
        const { id, img, alt } = element;
        return (
            <li key={id}>
                <a href="#">
                    <img src={img} alt={alt} />
                </a>
            </li>
        )
    })
    return <ul>{listaImgJsx}</ul>
}
export default ListaImg