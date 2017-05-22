import * as actions from '../actions/todoActions'
import todos from './todoReducers'

describe('todoReducers', () => {
  test('should handle initial state', () => {
    const expected = []
    const action = {
      type: 'none'
    }
    expect(todos(undefined, action)).toEqual(expected)
  })

  test('should handle add todo', () => {
    const id = 0
    const text = 'add todo'
    const expected = [
      {
        id,
        text,
        completed: false
      }
    ]
    expect(todos(undefined, actions.addTodo(id, text))).toEqual(expected)
  })

  test('should handle edit todo', () => {
    const id = 0
    const text = 'after edit'
    const initialState = [
      {
        id,
        text: 'before edit',
        completed: false
      }
    ]
    const expected = [
      {
        id,
        text,
        completed: false
      }
    ]
    expect(todos(initialState, actions.editTodo(id, text))).toEqual(expected)
  })
  test('should handle delete todo', () => {
    const id = 0
    const initialState = [
      {
        id,
        text: 'before delete',
        completed: false
      }, {
        id: 1,
        text: 'other todo',
        completed: false
      }
    ]
    const expected = [{
      id: 1,
      text: 'other todo',
      completed: false
    }]
    expect(todos(initialState, actions.deleteTodo(id))).toEqual(expected)
  })

  test('should handle toggle todo', () => {
    const id = 0
    const initialState = [
      {
        id,
        text: 'toggle todo',
        completed: false
      }, {
        id: 1,
        text: 'other todo',
        completed: false
      }
    ]
    const expected = [{
      id,
      text: 'toggle todo',
      completed: true
    }, {
      id: 1,
      text: 'other todo',
      completed: false
    }]
    expect(todos(initialState, actions.toggleTodo(id))).toEqual(expected)
  })

  test('should handle complete all todos', () => {
    const initialState = [
      {
        id: 0,
        text: 'todo 1',
        completed: false
      }, {
        id: 1,
        text: 'todo 2',
        completed: false
      }
    ]
    const expected = [{
      id: 0,
      text: 'todo 1',
      completed: true
    }, {
      id: 1,
      text: 'todo 2',
      completed: true
    }]
    expect(todos(initialState, actions.completeAll())).toEqual(expected)
  })

  test('should handle clear all completed todos', () => {
    const initialState = [
      {
        id: 0,
        text: 'todo 1',
        completed: true
      }, {
        id: 1,
        text: 'todo 2',
        completed: false
      }
    ]
    const expected = [{
      id: 1,
      text: 'todo 2',
      completed: false
    }]
    expect(todos(initialState, actions.clearCompleted())).toEqual(expected)
  })

})