import React, { PureComponent } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/todoActions'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import TextField from 'material-ui/TextField';


class AddTodo extends PureComponent {

  componentWillMount() {
    this.actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAdd}
      />,
    ];
  }

  render() {
    const { title, open } = this.props
    return (
      <Dialog
        title={title}
        actions={this.actions}
        modal={false}
        open={open}
        onRequestClose={this.handleClose}
      >
        <TextField style={styles.textInput} onChange={this.onTextChange} />
      </Dialog>
    )
  }

  onTextChange = (event, newValue) => {
    this.inputValue = newValue;
  }

  handleAdd = () => {
    if (this.inputValue) {
      const id = v4()
      const text = this.inputValue
      this.inputValue = ''
      this.props.addTodo(id, text)
    }
    this.props.handleClose()
  }

  handleClose = () => {
    this.inputValue = ''
    this.props.handleClose()
  }
}

const styles = {
  textInput: {
    width: '100%',
    height:40,
  }
}

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  open: ownProps.open,
  handleClose: ownProps.handleClose
})

const mapDispathToProps = (dispatch) => ({
  addTodo: bindActionCreators(actions.addTodo, dispatch)
})

AddTodo = connect(
  mapStateToProps,
  mapDispathToProps
)(AddTodo)

export default AddTodo