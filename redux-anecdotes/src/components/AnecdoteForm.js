import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux';



const AnecdoteForm = (props) => {
  const notify =(theMessage) => {
    props.createNotification(theMessage)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
  }

  console.log(props)

  const create = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    props.createAnecdote(content)
    notify(`new anecdote "${content}" added`);
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

const mapActionToProps = {
  createAnecdote,
  createNotification,
  removeNotification
}


export default connect(null, mapActionToProps)(AnecdoteForm);