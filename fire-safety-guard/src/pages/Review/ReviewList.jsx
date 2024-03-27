import ReviewPage from '../../components/Review/ReviewPage'

const ReviewList = (props) => {
  return (
    <main className="list">
      <h1>Reviews</h1>

      {!props.reviews.length && <h2>Oops!  No reviews here!</h2>}

      <ul>
        {props.reviews.map(review => (
          <ReviewPage handleRemoveReview={props.handleRemoveReview} key={review._id} review={review} />
        ))}
      </ul>
    </main>
  )
}

export default ReviewList