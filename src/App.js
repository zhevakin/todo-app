import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    // componentDidMount
    const timer = setInterval(() => {
      setTime(new Date())
    }, 500)

    // componentWillUnmount
    return () => {
      clearInterval(timer)
    }
  }, [])

  // componentDidUpdate
  useEffect(() => {
    if (count === 10) {
      console.log('Десять')
    }
  }, [count])

  const increment = useCallback(() => {
    setCount((val) => val + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return (
    <div>
      <div>Сейчас {time.toLocaleTimeString()}</div>
      <div>{count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default App
