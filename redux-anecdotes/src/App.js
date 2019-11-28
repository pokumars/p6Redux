import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';


const App = (props) => {
  const store = props.store
  return (
    <div>
      <Filter store={store} />
      <Notification store={store} />
      <h2>Anecdotes</h2>
      <AnecdoteList store={store}/>
      <h2>create new</h2>
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App