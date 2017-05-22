import React, { PureComponent } from 'react'
import ActionHome from 'material-ui/svg-icons/action/home';
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import ActionDelete  from 'material-ui/svg-icons/action/delete'
import { getCompletedTodoCount } from '../utils/todoUtil.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/todoActions'

class ListHeader extends PureComponent {
  render() {
    const { text, completedCount, actions} = this.props
    return (
      <ListItem primaryText={text}
        leftCheckbox={<Checkbox onTouchTap={actions.completeAll} />}
        rightIconButton={<IconButton onTouchTap={actions.clearCompleted}>
                        <ActionDelete />
                        </IconButton>} 
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  completedCount: getCompletedTodoCount(state.todos)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    completeAll: actions.completeAll,
    clearCompleted: actions.clearCompleted
  }, dispatch)
})

ListHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeader)


export default ListHeader