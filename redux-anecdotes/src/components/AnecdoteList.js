import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { createNotification, removeNotification } from '../reducers/notificationReducer'




const AnecdoteList = (props) => {
  const vote = (id) => {
    const notify =(theMessage) => {
      props.createNotification(theMessage)
      setTimeout(() => {
        props.removeNotification()
      }, 5000)
    }

    props.addVote(id)
    const selectedAnecdote = props.visibleAnecdotes.find(a => a.id === id);
    notify(`you voted "${selectedAnecdote.content}"`)
  }

  return (
    <>
    {props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes,filter }) => {
  const filterAnecdotes = (arr, query) => {

    return arr.filter((a) => {
      //console.log(a.content.toLowerCase());
      return a.content.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
  return filterAnecdotes(anecdotes, filter);
}

const mapDispatchToProps = {
  addVote,
  createNotification,
  removeNotification
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes : anecdotesToShow(state)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
  )(AnecdoteList);