import * as filterValues from '../constants/filterValues'

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case filterValues.SHOW_ALL:
      return todos
    case filterValues.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case filterValues.SHOW_COMPLETE:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

export const getCompletedTodoCount = (todos) => {
  return todos.filter( todo => todo.completed ).length
}