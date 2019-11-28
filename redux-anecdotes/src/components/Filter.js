import React from 'react';
import { filterBy } from '../reducers/filterReducer'

const Filter = (props) => {
  const { store } = props;

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const filterParam =event.target.value;
    store.dispatch(filterBy(filterParam));
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter