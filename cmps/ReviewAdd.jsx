import {bookService} from '../services/book-service.js'

export class ReviewAdd extends React.Component {

    state = {
        bookId: this.props.match.params.bookId,
        review: bookService.getEmpty()
    }

    componentDidMount() {
        // const { id } = this.props.match.params
        // if (id) petService.getById(id).then(pet => this.setState({ pet }))
        // this.elInput.current.focus()
    }

    onInputChange = (ev) => {
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ review: { ...this.state.review, [ev.target.name]: value } })
    }

    addReview = (ev) => {
        ev.preventDefault();
        bookService.getById(this.state.bookId).then(book=>{
            bookService.saveReview(this.state.review, book)

        })
        // eventBus.emit('notify', { msg: 'Pet Saved', type: 'fail' })
        this.props.history.push(`/book/${this.state.bookId}`)
    }

    render() {
        return (
            <section className='add-review'>
                <label htmlFor="">Full Name</label>
                <input className='review-input' name="name" 
                    placeholder="Full Name" type="text"
                    onChange={ this.onInputChange }
                />
                <label htmlFor="">Rating</label>
                <select className='review-input' name="rate" id="" value={ this.state.review.rate} onChange={ this.onInputChange }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="">Date read</label>
                <input className='review-input' type="date" name="readAt"
                    onChange={ this.onInputChange }
                />
                <label htmlFor="">Anything you want to add</label>
                <textarea className='review-input' name="freeText" placeholder="anything you want to add" onChange={ this.onInputChange}>
                </textarea>

                
                <button onClick={ this.addReview }>Save Review</button>
            </section>

        )
    }
}
