const { NavLink, Route, Switch } = ReactRouterDOM
export function About() {
    function Staff(props) {
        return <div>
            <h3>Our Staff</h3>
            <li>Popo</li>
            <li>Puki</li>
            <li>Shraga</li>
        </div>
    }
    function Vision(props) {
        return <div>
            <h3>Our Vision</h3>
            <li>Save the animals</li>
            <li>Love the animals</li>
            <li>Sell the animals</li>
        </div>
    }
    return (
        <div>
            <h2>About</h2>
            <ul>
                <li><NavLink to="/about/staff">Our Staff</NavLink></li>
                <li><NavLink to="/about/vision">The Vision</NavLink></li>
            </ul>
            <Switch>
                <Route component={ Staff } path="/about/staff" />
                <Route component={ Vision } path="/about/vision" />
            </Switch>
        </div>
    )
}
