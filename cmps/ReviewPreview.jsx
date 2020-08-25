import { bookService } from '../services/book-service.js'

export function ReviewPreview(props) {
    const { review } = props
    return (
        <section className="review-container">

            <li className="review-prev">
                <div>{`Name: ${review.name}`}</div>
                <div>{`Rate: ${review.rate}`}</div>
                <div>{`Date read: ${review.readAt}`}</div>
                <div className="free-text-lbl"><span>anything else</span></div>
                <p>{review.freeText}</p>
            </li>
            <button onClick={() => {
                console.log('now herer', props);

                props.removeReview(props.review.id, props.book)
            }}>X</button>
        </section>
    )
}
