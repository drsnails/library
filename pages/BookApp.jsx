import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookAdd } from '../cmps/BookAdd.jsx';

const { Link, Route, Switch } = ReactRouterDOM





export class BookApp extends React.Component {
    state = {
        filterByTxt: '',
        filterMin: '',
        filterMax: '',
        books: [],
    }
    componentDidMount() {
        this.loadBooks();
        this.setState({ filterMin: null, filterMax: null })


    }

    loadBooks() {
        bookService.query()
            .then(books => {
                this.setState({ books }, console.log('ee', this.state.books))
            })
    }

    setFilter = (val, filterBy) => {
        const { location } = this.props

        val = +val || val
        let urlSearch = this.getUrlSearchStr(location, val, filterBy)
        this.setState({ [filterBy]: val })
        // if (!val) return
        this.props.history.push(`/book?${urlSearch}`)
    }

    getUrlSearchStr(location, val, filterBy) {
        const urlSearch = new URLSearchParams(location.search)
        urlSearch.append(filterBy, val)
        let obj = {}
        urlSearch.forEach((val, filterBy) => {
            obj[filterBy] = val
        })
        let urlSearchStr = ''
        for (var key in obj) {
            urlSearchStr += `${key}=${obj[key]}&`
        }
        return urlSearchStr

    }


    setBooksForDisplay() {
        const books = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.filterByTxt.toLowerCase()))
        this.setState({ books })
    }
    getBooksForDisplay() {
        var { filterMin, filterMax } = this.state
        filterMax = filterMax || Infinity
        const books = this.state.books.filter((book) => {
            const bookPrice = +book.listPrice.amount
            const filterTitle = (book.title.toLowerCase().includes(this.state.filterByTxt.toLowerCase()))
            var filterPrice = (bookPrice >= filterMin && bookPrice <= filterMax)
            if (!filterMax || filterMax < filterMin) {
                filterPrice = true
            }
            return (filterTitle && filterPrice)
        })
        return books;
    }



    render() {
        const books = this.getBooksForDisplay();
        return (
            <section className="book-app">
                <BookFilter location={this.props.location} onFilter={this.setFilter} />
                <div className="link-btn">

                    <Link  to="/book/addBook">Add New Book</Link>
                </div>
                <BookList books={books} />
            </section>
        )
    }
}