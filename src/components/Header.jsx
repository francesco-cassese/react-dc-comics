import HeaderNavBar from "./HeaderNavBar.jsx";
import Logo from "./Logo.jsx";


function Header() {
    return <header className="header">
        <div class="container"> 
            <Logo/>
            <HeaderNavBar/>
       </div>
    </header>
}

export default Header;