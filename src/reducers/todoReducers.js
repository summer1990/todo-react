import * as types from '../constants/todoTypes'

const todo = (state, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case types.EIDT_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: state.completed
      }
    case types.TOGGLE_TODO:
      return {
        id: action.id,
        text: state.text,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case types.EIDT_TODO:
    case types.TOGGLE_TODO:
      return state.map(t => {
        if(t.id === action.id) {
          return todo(t, action)
        }
        return t
      })
    case types.DELETE_TODO:
      return state.filter(t => t.id !== action.id)
    case types.COMPLETE_ALL:
      const allCompleted = state.every(t => t.completed)
      return state.map(t => ({
        ...t,
        completed: !allCompleted
      }))
    case types.CLEAR_COMPLETED:
      return state.filter(t => !t.completed)
    default: return state
  }
}



export default todos