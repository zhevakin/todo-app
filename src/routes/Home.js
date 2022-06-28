import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const items = useSelector((state) => state.todo)

  return (
    <div>
      <h1>Главная страница</h1>
      <p>У вас {items.length} незаконченых дел</p>
      <Link to="/todo">Посморите список дел</Link>
    </div>
  )
}

export default Home
