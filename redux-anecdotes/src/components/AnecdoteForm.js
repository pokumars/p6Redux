import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notifyAsync } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const notify = (theMessage) => {
    props.notifyAsync(theMessage, 5000)
  }

  // console.log(props)

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log('newAnecdote --->', content)

    props.createAnecdote(content)

    notify(`new anecdote "${content}" added`)
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

const mapDispatchToProps = {
  createAnecdote,
  notifyAsync
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
