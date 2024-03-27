const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/reviews`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function create(formData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteReview(reviewId) {
  try {
    const res = await fetch(`${BASE_URL}/${reviewId}`, {
      method: 'DELETE'
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function updateReview(formData) {
  try {
    const res = await fetch(`${BASE_URL}/${formData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  create,
  deleteReview,
  updateReview
}