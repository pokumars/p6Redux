import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import { notifyShort } from '../reducers/notificationReducer';



const AnecdoteList = (props) => {
  const store = props.store
  const { anecdotes, notification } =store.getState()

  const vote = (id) => {
    store.dispatch(addVote(id));
    const selectedAnecdote = anecdotes.find(a => a.id === id);
    notifyShort(store, `you voted "${selectedAnecdote.content}"`);
  }

  return (
    <>
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
    
    </>
  )
}


export default AnecdoteList