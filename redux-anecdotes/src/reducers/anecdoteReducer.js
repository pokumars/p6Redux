const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject);


const sortByVotes= (initiallArr)=> {
  return initiallArr.sort((a, b) => b.votes -a.votes);
}

const anecdoteReducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  //NEW_ANECDOTE
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'VOTE':
      //console.log('vote for ',action.data.id)
      const id = action.data.id;
      const anecdoteToChange = state.find(a => a.id === id);
      const changedAnecdote ={
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      const allAnecdotes = state.map(anecdote => 
        anecdote.id !== id? anecdote: changedAnecdote);
  
      return sortByVotes(allAnecdotes);
    case 'NEW_ANECDOTE':
      //console.log('new content ---->', action.data.content);
      return sortByVotes([...state, action.data]);
    default:
      break;
  }
  return state
}

export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      id:getId(),
      content,
      votes: 0
    }
  }
}

export const initialiseAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_NOTES',
    data: anecdotes
  }
}


export default anecdoteReducer