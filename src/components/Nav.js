import { Link, BrowserRouter } from "react-router-dom"



// nav bar component holds the logo and the nav links
const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">PaySide</a>
                    <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Nav;