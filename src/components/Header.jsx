import HeaderNavBar from "./HeaderNavBar.jsx";
import Logo from "./Logo.jsx";


function Header() {
    return <header className="header">
        <div className="container">
            <Logo />
            <HeaderNavBar />
        </div>
    </header>
}

export default Header;