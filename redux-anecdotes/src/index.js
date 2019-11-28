import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';
import { notify } from './reducers/notificationReducer';


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification : notificationReducer,
  filter: filterReducer
});

const store = createStore(reducer)
console.log(store.getState())

store.subscribe(()=> console.log(store.getState()));
//notify(store, 'Hi there officer');
notify('Hi there officer');

console.log(store.dispatch)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)