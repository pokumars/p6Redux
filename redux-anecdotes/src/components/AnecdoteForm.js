import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import {  notify } from '../reducers/notificationReducer'



const AnecdoteForm = (props) => {

  const { store } = props

  const create = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    //console.log(content)
    store.dispatch(createAnecdote(content));
    notify(store, `new anecdote "${content}" added`);
    event.target.newAnecdote.value = '';
  }
  return (
    <>
      <form onSubmit={ create }>
        <div><input name="newAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm;