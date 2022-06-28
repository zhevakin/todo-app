import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment(12))}>Увеличить</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
    </div>
  )
}

export default Counter
