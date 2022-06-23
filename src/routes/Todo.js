import { useState } from 'react'
import styles from './Todo.module.css'
import AddItemForm from '../components/AddItemForm'
import TodoItem from '../components/TodoItem'

const defaultItems = [
  {
    id: 0,
    title: 'Купить хлеб',
    completed: false,
  },
]

function Todo() {
  const [items, setItems] = useState(defaultItems)

  console.log(styles)

  const handleSubmit = (title) => {
    const newItem = {
      id: items.length,
      title,
      completed: false,
    }
    setItems([...items, newItem])
  }

  const handleItemComplete = (clickedItem) => {
    const newItems = items.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item
    })

    setItems(newItems)
  }

  const handleItemDelete = (clickedItem) => {
    const newItem = items.filter((item) => item.id !== clickedItem.id)

    setItems(newItem)
  }

  return (
    <div className={styles.container}>
      <AddItemForm onSubmit={handleSubmit} />
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={() => handleItemComplete(item)}
          onDelete={() => handleItemDelete(item)}
        />
      ))}
    </div>
  )
}

export default Todo
