import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import './css/index.css'
import {saveData, readData } from './utils/localStorage'

injectTapEventPlugin()


const initialState = readData()

const store = createStore(reducers, initialState)

store.subscribe(() => {
  saveData(store.getState())
})

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