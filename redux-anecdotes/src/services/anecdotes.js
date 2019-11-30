import axios from 'axios'

const baseUrl ='http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data
}

const createAnecdote = async content => {
  const object = { content, votes: 0}
  console.log('object --->', object)
  const response = await axios.post(baseUrl, object);
  console.log('returned object --->', response.data)
  return response.data;
}

export default { getAll, createAnecdote}