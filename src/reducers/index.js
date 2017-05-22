import todos from './todoReducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  todos
})

export default reducers