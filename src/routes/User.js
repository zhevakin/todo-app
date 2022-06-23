import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function User() {
  const [input, setInput] = useState('')
  const { userId } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/user/${input}`)
  }

  return (
    <div>
      <h1>Пользователь ID: {userId}</h1>
      <p>Введите новый ID пользователя:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default User
