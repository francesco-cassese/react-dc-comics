import MainCardContainer from "./MainCardContainer";
import ActionNavbar from "./ActionNavbar";


function Main() {
    return <main>
        <section className="main-content">
            <div className="jumbotron">
            </div>

            <div className="container">
                <span className="main-badge">
                    CURRENT SERIES
                </span>
                <MainCardContainer />
                <div className="btn-loadmore-container">
                    <button className="btn-loadmore">
                        LOAD MORE
                    </button>
                </div>
            </div>
        </section>
        <section className="action-navbar">
            <div className="container">
                <ActionNavbar />
            </div>
        </section>
    </main>
};

export default Main;