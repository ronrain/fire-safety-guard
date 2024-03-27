// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditReview = (props) => {
  const location = useLocation()
  const [form, setForm] = useState(location.state.review)

  console.log(location)

  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateReviewEditReview(form)
  }

  return (
    <main className="new">
      <h1>EDIT REVIEW</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="comment-input">Comment</label>
        <input
          required
          type="text"
          name="comment"
          id="comment-input"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
        />
        <button type="submit">SAVE CHANGES</button>
      </form>
    </main>
  )
}

export default EditReview