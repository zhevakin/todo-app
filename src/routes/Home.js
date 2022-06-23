import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/todo">Посморите список дел</Link>
    </div>
  )
}

export default Home
