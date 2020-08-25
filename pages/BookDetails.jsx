const { Link } = ReactRouterDOM

import { LongTxt } from '../cmps/LongTxt.jsx'
import { bookService } from '../services/book-service.js'
import { ReviewList } from '../cmps/ReviewList.jsx';

export class BookDetails extends React.Component {

    state = {
        isLongTxtShown: true,
        isButton: true,
        book: null
    }

    componentDidMount() {
        const bookId = this.props.match.params.bookId
        console.log(bookId);
        bookService.getById(bookId)
            .then(book => this.setState({ book }), () => {
                this.getBookLengthDesc()
                const bookDescLength = (this.state.book.description).length
                console.log(bookDescLength);
                const isLong = (bookDescLength >= 100)
                if (isLong) {
                    this.setState({ isLongTxtShown: true, isButton: true })
                } else {
                    this.setState({ isLongTxtShown: false, isButton: false })
                }
            })


    }

    toggleMore = () => {
        const { isLongTxtShown } = this.state
        this.setState({ isLongTxtShown: !isLongTxtShown })

    }


    getBookLengthDesc = () => {
        const bookLength = this.state.book.pageCount
        if (bookLength > 500) {
            return 'Long Reading'
        } else if (bookLength > 200 && bookLength <= 500) {
            return 'Decent Reading'
        } else {
            return 'Light Reading'
        }
    }

    getBookAgeDesc = () => {
        const bookAge = 2020 - (+this.state.book.publishedDate)
        if (bookAge > 10) {
            return 'Veteran Book'
        } else if (bookAge <= 1) {
            return 'New!'
        }
    }

    removeReview = (reviewId, book) => {
        bookService.removeReview(reviewId, book)
        this.setState({book})
    }

    render() {
        if (!this.state.book) return <div>Loading....</div>
        const { book } = this.state
        return (
            <div className='book-details'>
                <div className="img-box">
                    <img src={book.thumbnail} alt="" />
                </div>
                <div className="book-desc">
                    <p>{this.getBookLengthDesc()}</p>
                    <p>{this.getBookAgeDesc()}</p>
                </div>
                <section className="add-rev-btn">

                    <Link to={`/book/${book.id}/review`}>Add Review</Link>
                </section>


                <ReviewList book={book} removeReview={this.removeReview}/>
                <div className="details-title">
                    <p>Title</p>
                    <h3>{book.title}</h3>
                </div>
                <div className="subtitle">
                    <p>Subtitle</p>
                    <h3>{book.subtitle}</h3>
                </div>
                <div className="authors">
                    <p>Authors</p>
                    <h3>{book.authors}</h3>
                </div>
                <div className="published-date">
                    <p>published Date</p>
                    <h3>{book.publishedDate}</h3>
                </div>
                <div className="description">
                    <p>Description</p>
                    <LongTxt text={book.description} isLongTxtShown={this.state.isLongTxtShown} isButton={this.state.isButton} toggleMore={this.toggleMore} />
                </div>
                <div className="page-count">
                    <p>Page Count</p>
                    <h3>{book.pageCount}</h3>
                </div>
                <div className="categories">
                    <p>Categories</p>
                    <h3>
                        {book.categories.map((ctg) => {
                            return <span key={Math.random()} className="span-ctg">{ctg}</span>
                        })}
                    </h3>
                </div>
                <div className="language">
                    <p>Language</p>
                    <h3>{book.language}</h3>
                </div>
                <div className="details-price">
                    <p>Price</p>
                    <h3>{`${book.listPrice.amount} ${bookService.getCurrencySymbol(book.listPrice.currencyCode)}`}</h3>
                </div>

                <button onClick={() => this.props.history.push('/book')}>Back</button>

            </div>
        )
    }
}
