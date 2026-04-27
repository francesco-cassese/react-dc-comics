import HeaderNavBar from "./HeaderNavBar";
import Logo from "./Logo";

function Header() {
    return <header className="header">
        <Logo />
        <HeaderNavBar/>
    </header>
}

export default Header;