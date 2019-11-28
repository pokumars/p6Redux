import React from 'react';
import { filterBy } from '../reducers/filterReducer'
import { connect } from 'react-redux';

const Filter = (props) => {

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    const filterParam =event.target.value;
    props.filterBy(filterParam)
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

const mapDispatchToProps = {
  filterBy
}

export default connect(
  null,
  mapDispatchToProps
  )(Filter)