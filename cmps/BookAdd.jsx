import { GoogleBookList } from "./GoogleBookList.jsx"

export class BookAdd extends React.Component {

    state = {
        searchKey: ''
    }

    handleChange = (val, filterBy) => {
        this.setState({ searchKey: val })
    }

    render() {
        return (
            <section className="book-filter">
                <form action="">
                    <div className="book-search">
                        <input value={this.state.searchKey} type="text" placeholder="Search for a book" onChange={(ev) => {
                            this.handleChange(ev.target.value, 'filterByTxt')
                        }} />
                    </div>

                </form>
                {this.state.searchKey && <GoogleBookList searchKey={this.state.searchKey} />}

            </section>)
    }

}
