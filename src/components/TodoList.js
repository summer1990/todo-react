import React from 'react'
import { List } from 'material-ui/List'
import TodoItem from './TodoItem'

const TodoList = ({
  todos,
  onToggle,
  onDelete,
}) => (
    <List>
      {
        todos.map( todo => {
          return <TodoItem
                    key={todo.id} 
                    {...todo} 
                    onToggle={() => onToggle(todo.id)}
                    onDelete={() => onDelete(todo.id)} />
        })
      }
    </List>
)

export default TodoList