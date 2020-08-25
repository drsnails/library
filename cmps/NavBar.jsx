const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {
    function goBack() {
        props.history.goBack()
    }
    return (
        <nav className="main-nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact  to="/book">Books</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)