import { ReviewPreview } from './ReviewPreview.jsx';


export class ReviewList extends React.Component {

    componentDidMount () {
    }
    render() {
        return (
            <div className="reviews-container">
                {this.props.book.reviews.map(review =>
                <ul key={review.id}>
                    <ReviewPreview review={review} book={this.props.book} removeReview={this.props.removeReview}/>
                </ul>)
                
            }
            
            </div>
        )
    }
}

