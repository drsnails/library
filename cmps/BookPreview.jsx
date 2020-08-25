import {bookService} from '../services/book-service.js'
const { Link, withRouter } = ReactRouterDOM



function _BookPreview({ book }) {
    return <article className="book-preview">
    
        <Link to={`/book/${book.id}`} className="go-top">
            <img className="prev-img" src={book.thumbnail} alt=""/>
            <div className='book-title'>
                <h3>{`Title: ${book.title}`}</h3>
            </div>
            <div className="book-price">
                <h3>{`Price: ${book.listPrice.amount} ${bookService.getCurrencySymbol(book.listPrice.currencyCode)}`}</h3>
            </div>
        </Link>


    </article>
}

export const BookPreview = withRouter(_BookPreview)