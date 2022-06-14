import { useState } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'

const defaultItems = [
  {
    id: 0,
    title: 'Купить хлеб',
    completed: false,
  },
]

function App() {
  const [items, setItems] = useState(defaultItems)

  const handleSubmit = (title) => {
    const newItem = {
      id: items.length,
      title,
      completed: false,
    }
    setItems([...items, newItem])
  }

  return (
    <div>
      <AddItemForm onSubmit={handleSubmit} />
      {items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  )
}

export default App
