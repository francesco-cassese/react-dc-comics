import MainCardContainer from "./MainCardContainer";
import ActionNavbarContainer from "./ActionNavbarContainer";
import Jumbotron from "./Jumbotron";


function Main() {
    return <main>
        <section className="main-content">
            <div className="jumbotron">
            </div>
            <div className="container">
                <MainCardContainer />
            </div>
        </section>
        <section className="action-navbar">
            <div className="container">
                <ActionNavbarContainer />
            </div>
        </section>
    </main>
};

export default Main;