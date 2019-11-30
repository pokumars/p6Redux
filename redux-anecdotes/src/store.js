import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';
import { notify } from './reducers/notificationReducer';


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification : notificationReducer,
  filter: filterReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk))
console.log(store.getState())

store.subscribe(()=> console.log(store.getState()));
//notify(store, 'Hi there officer');
notify('Hi there officer');

export default store