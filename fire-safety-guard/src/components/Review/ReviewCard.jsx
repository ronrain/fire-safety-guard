import { Link } from "react-router-dom"

const ReviewCard = ({ review, handleRemoveReview }) => {
  return ( 
    <li>
      <section>
        <button onClick={() => handleRemoveReview(review._id)}>🗑️</button>
      </section>
      <h2>{review.name.toUpperCase()}</h2>
      <p>{review.name} says "{review.comment}"</p>
      <Link to='/reviews/edit' state={{review}}>
        <button>✏️</button>
      </Link>
    </li>
  )
}

export default ReviewCard