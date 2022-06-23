import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const SubmitButton = styled(Button)`
  font-size: 32px;
  padding: 10px 20px;
`

function User() {
  const [input, setInput] = useState('')
  const { userId } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/user/${input}`)
  }

  return (
    <Container>
      <h1>Пользователь ID: {userId}</h1>
      <p>Введите новый ID пользователя:</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <SubmitButton type="submit">Отправить</SubmitButton>
      </form>
    </Container>
  )
}

export default User

const Container = styled.div`
  border: 1px solid #eee;
  color: green;
  padding: 10px;
  margin: 0 20px;
`

const Input = styled.input`
  padding: 10px;
  color: #999;
`
