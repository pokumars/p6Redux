import React from 'react';


const AnecdoteForm = (props) => {
  const { createHandler } = props
  return (
    <>
      <form onSubmit={ createHandler }>
        <div><input name="newAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm;