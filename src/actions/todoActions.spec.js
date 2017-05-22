import * as types from '../constants/todoTypes'
import * as actions from './todoActions'

describe('todoActions',() => {
  test('should create an action to add a todo', () => {
    const id = 0
    const text = 'add todo'
    const expected = {
      type: types.ADD_TODO,
      id,
      text
    }
    expect(actions.addTodo(id, text)).toEqual(expected)
  })

  test('should create an action to edit a todo', () => {
    const id = 0
    const text = 'edit todo'
    const expected = {
      type: types.EIDT_TODO,
      id,
      text
    }
    expect(actions.editTodo(id, text)).toEqual(expected)
  })

  test('should create an action to delete a todo', () => {
    const id = 0
    const expected = {
      type: types.DELETE_TODO,
      id
    }
    expect(actions.deleteTodo(id)).toEqual(expected)
  })

  test('should create an action to toggle a todo', () => {
    const id = 0
    const expected = {
      type: types.TOGGLE_TODO,
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expected)
  })

  test('should create an action to complete all todos', () => {
    const expected = {
      type: types.COMPLETE_ALL
    }
    expect(actions.completeAll()).toEqual(expected)
  })

  test('should create an action to clear all completed todos', () => {
    const expected = {
      type: types.CLEAR_COMPLETED
    }
    expect(actions.clearCompleted()).toEqual(expected)
  })
})