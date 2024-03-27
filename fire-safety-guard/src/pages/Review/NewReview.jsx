// npm modules
import { useState } from "react"

const NewReview = (props) => {
  const [form, setForm] = useState({
    name: '', 
    comment: '', 
  })

  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddReview(form)
  }

  return (
    <main className="new">
      <h1>NEW REVIEW</h1>
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
          placeholder="Tell us how we did!"
          value={form.comment}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewReview