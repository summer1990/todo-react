import React, { PureComponent } from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/todoActions'
import { getVisibleTodos } from '../utils/todoUtil'

class TodoContent extends PureComponent {
  render() {
    const { todos, actions, filter} = this.props
    const visibleTodos = getVisibleTodos(todos, filter)
    return (
          <TodoList 
            style={this.props.style}
            todos={visibleTodos}
            onToggle={actions.toggleTodo} 
            onDelete={actions.deleteTodo} />  
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  filter: ownProps.filter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

TodoContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContent)

export default TodoContent