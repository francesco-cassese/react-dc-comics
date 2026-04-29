import linkNavigazioneHeader from "./data/headerLinks.js";
import comics from "./data/comics.js";
import ActionElem from "./data/actionElem.js";
import { dcComicsLinks, shopLinks, dcLinks, sitesLinks } from "./data/footerLinks.js"
import socialLinks from "./data/socialLink.js";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";


function App() {

  return <>
    <Header links={linkNavigazioneHeader} />
    <Main comicsListObj={comics} actionListLinks={ActionElem} />
    <Footer />
  </>

}

export default App
