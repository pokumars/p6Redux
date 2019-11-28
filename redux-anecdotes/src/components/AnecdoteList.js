import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import { notifyShort } from '../reducers/notificationReducer';



const AnecdoteList = (props) => {
  const store = props.store
  const { anecdotes, notification, filter } =store.getState()

  const filterAnecdotes = (arr, query) => {

    return arr.filter((a) => {
      //console.log(a.content.toLowerCase());
      return a.content.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }

  const filteredAnecdotes = filterAnecdotes(anecdotes, filter);

  const vote = (id) => {
    store.dispatch(addVote(id));
    const selectedAnecdote = anecdotes.find(a => a.id === id);
    notifyShort(store, `you voted "${selectedAnecdote.content}"`);
  }

  return (
    <>
    {filteredAnecdotes.map(anecdote =>
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