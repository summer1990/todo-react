import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import './css/index.css'

injectTapEventPlugin()


const initialState = {
  todos:[
    {
      id: 0,
      text: 'todo1',
      completed: false
    }, {
      id: 1,
      text: 'todo2',
      completed: false
    }
  ]
}

const store = createStore(reducers, initialState)

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </MuiThemeProvider>
)


ReactDom.render(
  <App />,
  document.getElementById('root')
)