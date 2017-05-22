import React, { PureComponent } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as filterValues from '../constants/filterValues'
import TodoContent from '../containers/TodoContent'
import AddTodo from '../containers/AddTodo'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class TodoApp extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      addTodoDialogOpened: false
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <Tabs>
          <Tab label='All'>
              <TodoContent filter={filterValues.SHOW_ALL} />
          </Tab>
          <Tab label='Active' >
            <TodoContent filter={filterValues.SHOW_ACTIVE}/>
          </Tab>
          <Tab label='Complete' >
            <TodoContent filter={filterValues.SHOW_COMPLETE} />
          </Tab>
        </Tabs>
        <div style={styles.floatingButton}> 
          <FloatingActionButton onTouchTap={this.showAddTodoDialog}>
              <ContentAdd />
          </FloatingActionButton>
        </div>
        <AddTodo open={this.state.addTodoDialogOpened}
          title="What do you want to do?"
          handleClose={this.closeDialog} />
      </div>
    )
  }

  showAddTodoDialog = () => {
    this.setState({
      addTodoDialogOpened: true
    })
  }
  closeDialog = () => {
    this.setState({
      addTodoDialogOpened: false
    })
  }
}

const styles = {
  container:{
    flex: 1,
    height: '100%',
    overflow:'scroll'
  },
   floatingButton: {
    height:30,
    position:'absolute',
    bottom:40,
    right:20,
  }
}

export default TodoApp