const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import {About} from './pages/About.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { ReviewAdd } from './cmps/ReviewAdd.jsx'
import { BookAdd } from './cmps/BookAdd.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div >
                    <AppHeader/>
                    <main >
                        {/* <BookApp /> */}
                        <Switch>
                            <Route exact component={ BookAdd } path="/book/addBook" />
                            <Route exact component={ BookDetails } path="/book/:bookId"/>
                            <Route exact component={ ReviewAdd } path="/book/:bookId/review" />
                            <Route component={ About } path="/about" />
                            <Route component={ BookApp } path="/book" />
                            <Route component={ Home } path="/" />
                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}

