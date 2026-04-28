
const socialLinks = [
    {
        id: 1,
        img: "/img/footer-facebook.png",
        alt: "link che collega a Facebook"
    },
    {
        id: 2,
        img: "/img/footer-twitter.png",
        alt: "link che collega a Twitter"
    },
    {
        id: 3,
        img: "/img/footer-youtube.png",
        alt: "link che collega a Youtube"
    },
    {
        id: 4,
        img: "/img/footer-pinterest.png",
        alt: "link che collega a Pinterest"
    },
    {
        id: 5,
        img: "/img/footer-periscope.png",
        alt: "link che collega a Periscope"
    }
]

function FooterSocialLinks() {
    const listaLinksJsx = socialLinks.map(link => {
        const { id, img, alt } = link;
        return (
            <li key={id}>
                <a href="#">
                    <img src={img} alt={alt} />
                </a>
            </li>
        )
    });
    return <ul>{listaLinksJsx}</ul>
}

export default FooterSocialLinks;