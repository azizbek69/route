import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ className }) => {
    className = "navbar navbar-expand-lg navbar-light bg-light " + className;

    return (
        <Fragment>
            <nav className={className}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar scroll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ height: "100px" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/posts">Posts</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation