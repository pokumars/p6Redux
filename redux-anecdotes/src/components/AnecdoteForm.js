import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes'



const AnecdoteForm = (props) => {
  const notify =(theMessage) => {
    props.createNotification(theMessage)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
  }

  //console.log(props)

  const create = async (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    event.target.newAnecdote.value = '';
    console.log('newAnecdote --->',content)

    const freshAnecdote = await anecdoteService.createAnecdote(content);
    props.createAnecdote(freshAnecdote)

    notify(`new anecdote "${content}" added`);    
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

const mapActionToProps = {
  createAnecdote,
  createNotification,
  removeNotification
}


export default connect(null, mapActionToProps)(AnecdoteForm);