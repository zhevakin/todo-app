import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Todo from './routes/Todo'
import User from './routes/User'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная страница</Link>
          </li>
          <li>
            <Link to="/about">О проекте</Link>
          </li>
          <li>
            <Link to="/todo">Список</Link>
          </li>
          <li>
            <Link to="/user/123">Профиль юзера</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<Todo />} />
        <Route path="user/:userId" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
