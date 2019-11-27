import React from 'react';
import { addVote, createAnecdote } from './reducers/anecdoteReducer';

const App = (props) => {
  const store = props.store
  const anecdotes =store.getState()

  const vote = (id) => {
    store.dispatch(addVote(id));
  }

  const create = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    console.log(content)
    store.dispatch(createAnecdote(content));
    event.target.newAnecdote.value = '';
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name="newAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App