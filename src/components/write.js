import { useState } from 'react'

function Subscribe({ setSubscribed }) {
  const [email, setEmail] = useState('')

  async function postToNotion(e) {
    e.preventDefault()
    setSubscribed(true)
    await fetch('api/update-notion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })    
  }

  return (
    <form
      className="form"
      onSubmit={postToNotion}
    >
    <input
        className="nameInput
              focus:outline-none focus:ring-1 focus:ring-palette-primary"
        type="name"
        required
        placeholder="Your name here"
        onChange={(e) => setName(e.target.value)}
      />
    
      <input
        className="emailInput
              focus:outline-none focus:ring-1 focus:ring-palette-primary"
        type="email"
        required
        placeholder="Your email here"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="submit"
      >
        Subscribe
      </button>
    </form>
  )
}

export default Write
