import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'; // Import the Auth0 hook
import LoginButton from '../../pages/Login/LoginButton';
import LogoutButton from '../../pages/Login/LogoutButton';

//pages
import EditReview from '../../pages/Review/EditReview';
import NewReview from '../../pages/Review/NewReview';
import ReviewList from '../../pages/Review/ReviewList';

const ReviewPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); // Use the Auth0 hook
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviewService.index()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  const handleAddReviews = async formData => {
    const newReviews = await reviewService.create(formData)
    setReviews([newReviews, ...reviews])
    navigate('/reviews')
  }

  const handleRemoveReviews = async reviewId => {
    const removedReviews = await reviewService.deleteReviews(reviewId)
    setReviews(reviews.filter(p => p._id !== removedReviews._id))
  }

  const handleUpdateReviews = async updatedReviewsFormData => {
    const updatedReviews = await reviewService.updateReviews(updatedReviewsFormData)
    setReviews(reviews.map(p => p._id === updatedReviews._id ? updatedReviews : p))
    navigate('/reviews')
  }

  return (
    <div>
      <h1>Customer Reviews</h1>
      {/* Display login or logout button based on authentication status */}
      {isAuthenticated ? (
        <>
          <LogoutButton /> {/* Use the LogoutButton component */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" defaultValue={user.name} required readOnly />
            </div>
            <div>
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" required></textarea>
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </>
      ) : (
        <>
          <p>Please <button onClick={() => loginWithRedirect()}>login</button> to submit a review.</p>
          <LoginButton /> {/* Use the LoginButton component */}
        </>
      )}
      <div>
        <h2>Latest Reviews:</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.name}:</strong> {review.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    <div>
        <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/reviews' element={<ReviewList handleRemoveReviews={handleRemoveReviews} reviews={reviews} />} />
        <Route path='/reviews/new' element={<NewReview handleAddReviews={handleAddReviews} />} />
        <Route path='/reviews/edit' element={<EditReview handleUpdateReviews={handleUpdateReviews} />}/>
      </Routes>
    </>
    </div>
    </div>

  );
};

export default ReviewPage;
