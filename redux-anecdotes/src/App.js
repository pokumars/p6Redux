import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import anecdoteService from './services/anecdotes';
import { initialiseAnecdotes } from './reducers/anecdoteReducer'

//
const App = (props) => {
  

  useEffect(() =>{
    /*anecdoteService.getAll()
    .then(allAnecdotes => props.initialiseAnecdotes(allAnecdotes))*/
    props.initialiseAnecdotes()
  },[])

  return (
    <div>
      <Filter />
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

const mapDispatchToProps = {
  initialiseAnecdotes
}

export default connect(null, mapDispatchToProps)(App)