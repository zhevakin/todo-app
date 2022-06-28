import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 0,
    title: 'Купить молоко',
    completed: false,
  },
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: state.length,
        title: action.payload,
        completed: false,
      }
      return [...state, newItem]
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
    completeItem: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    },
  },
})

export const { addItem, deleteItem, completeItem } = todoSlice.actions

export default todoSlice.reducer
