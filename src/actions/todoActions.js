import * as types from '../constants/todoTypes'

export const addTodo = (id, text) => ({
  type: types.ADD_TODO,
  id,
  text
})

export const editTodo = (id, text) => ({
  type: types.EIDT_TODO,
  id,
  text
})

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})

export const completeAll = () => ({
  type: types.COMPLETE_ALL
})

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED
})