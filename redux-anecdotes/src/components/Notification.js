import React from 'react'
import { connect } from 'react-redux';

const Notification = (props) => {
  //const { store } = props
  const { notification, anecdotes} = props

  if (notification === null){
    return null;
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: '#cceeff'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    notification: state.notification,
    anecdotes: state.anecdotes
  }
}

export default connect(mapStateToProps)(Notification)