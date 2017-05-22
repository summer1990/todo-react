import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import ActionDelete  from 'material-ui/svg-icons/action/delete'
import { cyan500 } from 'material-ui/styles/colors'

const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete
})  => (
  <ListItem primaryText={text}
     leftCheckbox={<Checkbox checked={completed} onCheck={onToggle} />}
     rightIconButton={<IconButton onTouchTap={onDelete}>
                        <ActionDelete color={cyan500}/>
                        </IconButton> } 
  />
)

export default TodoItem