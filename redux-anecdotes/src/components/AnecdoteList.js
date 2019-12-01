import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { createNotification, removeNotification, notifyAsync, notify2 } from '../reducers/notificationReducer'




const AnecdoteList = (props) => {

  const vote = (id, content) => {
    props.addVote(id)
    props.notifyAsync(`you voted "${content}"`, 5000)
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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
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
  notifyAsync
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes : anecdotesToShow(state)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
  )(AnecdoteList);