import { bookService } from '../services/book-service.js'
const { Link, withRouter} = ReactRouterDOM



class _GoogleBookList extends React.Component {

    state = {
        googleBooks: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchKey !== this.props.searchKey) {
            this.loadBooks()
        }
    }

    loadBooks() {
        bookService.getGoogleBooks(this.props.searchKey)
            .then(books => {
                this.setState({ googleBooks: books.items })
            })
    }

    addBook = (ev) => {
        const googleBookIdx = +ev.target.dataset.idx
        bookService.addGoogleBook(this.state.googleBooks[googleBookIdx])
        this.props.history.push('/book')
    }

    render() {
        if (!this.state.googleBooks.length) return <div>loading....</div>
        return (
            <ul className="google-books-container">

                {this.state.googleBooks.map((book, idx) =>
                    <li className="book-title"  key={book.id}>
                       <button className="add-gbook" data-idx={idx} onClick={this.addBook}>+</button> <p>{book.volumeInfo.title}</p>
                    </li>)

                }

            </ul>
        )
    }
}

export const GoogleBookList = withRouter(_GoogleBookList)