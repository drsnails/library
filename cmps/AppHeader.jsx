import { NavBar } from "./NavBar.jsx";

export class AppHeader extends React.Component {
    render() {
        return (
            <header className="main-header">
                <h2>Book Shop</h2>
                <NavBar/>
            </header>
        )
    }
}
