import ReviewCard from '../../components/ReviewCard'

const ReviewList = (props) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>

      {!props.reviews.length && <h2>Oops!  No reviews here!</h2>}

      <ul>
        {props.reviews.map(review => (
          <ReviewCard handleRemoveReview={props.handleRemoveReview} key={review._id} review={review} />
        ))}
      </ul>
    </main>
  )
}

export default ReviewList